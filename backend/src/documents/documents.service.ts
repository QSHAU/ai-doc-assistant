import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { randomUUID } from 'node:crypto';
import { extname, join } from 'node:path';
import { writeFile, unlink, mkdir } from 'node:fs/promises';
import { Prisma, Document } from '../../generated/prisma/client';
import { ConfigService } from '@nestjs/config';
import { ListDocumentsQueryDto } from './dto/list-documents-query.dto';
import { DocumentParserService } from './document-parser.service';
import { chunkText } from './utils/chunk-text';
import { EmbeddingsProvider } from '../ai/embeddings.provider';

@Injectable()
export class DocumentsService implements OnModuleInit {
  private readonly logger = new Logger(DocumentsService.name);
  private readonly dirPath: string;

  constructor(
    private config: ConfigService,
    private prisma: PrismaService,
    private readonly parser: DocumentParserService,
    private readonly embeddings: EmbeddingsProvider,
  ) {
    this.dirPath = this.config.get<string>('UPLOAD_DIR', 'uploads');
  }

  async onModuleInit() {
    await mkdir(this.dirPath, {
      recursive: true,
    });
  }

  create(data: {
    userId: string;
    filename: string;
    storedName: string;
    mimeType: string;
    size: number;
  }) {
    return this.prisma.document.create({
      data,
    });
  }

  async upload(file: Express.Multer.File, userId: string) {
    const fullFileName = file.originalname;
    const uniqName = `${randomUUID()}${extname(fullFileName)}`;
    const filePath = join(this.dirPath, uniqName);
    const mimeType = file.mimetype;
    const size = file.size;

    const data = {
      userId,
      filename: fullFileName,
      storedName: uniqName,
      mimeType,
      size,
    };
    await writeFile(filePath, file.buffer);
    let createdDocument: Document;
    try {
      createdDocument = await this.create(data);
    } catch (err) {
      await this.safeUnlink(filePath, 'При создании файла');
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new ConflictException('Нарушено ограничение уникальности');
        } else if (err.code === 'P2003') {
          throw new NotFoundException('userId не существует');
        }
      }
      throw err;
    }

    try {
      const text = await this.parser.parse(filePath, mimeType);
      const chunks = chunkText(text);
      if (!chunks.length) throw Error('Документ не содержит текста');
      const documentChunks = chunks.map((chunk, i) => ({
        id: randomUUID(),
        documentId: createdDocument.id,
        content: chunk,
        chunkIndex: i,
      }));
      const vectors = await this.embeddings.embedTexts(chunks);
      this.logger.debug(vectors.length, vectors[0].length);
      createdDocument = await this.prisma.$transaction(async (tx) => {
        await tx.documentChunk.createMany({
          data: documentChunks,
        });

        for (let i = 0; i < documentChunks.length; i++) {
          await this.saveChunkEmbedding(tx, documentChunks[i].id, vectors[i]);
        }

        const updatedDocument = await tx.document.update({
          where: { id: createdDocument.id },
          data: {
            status: 'READY',
            failureReason: null,
          },
        });
        return updatedDocument;
      });
    } catch (err) {
      this.logger.error(
        'Не удалось обработать документ',
        err instanceof Error ? err.stack : String(err),
      );
      const documentId = createdDocument.id;
      createdDocument = await this.prisma.document.update({
        where: { id: documentId },
        data: {
          status: 'FAILED',
          failureReason: 'Не удалось обработать документ',
        },
      });
    }
    return createdDocument;
  }

  async findAll(userId: string, query: ListDocumentsQueryDto) {
    const { page = 1, limit = 10 } = query;
    const [items, total] = await this.prisma.$transaction([
      this.prisma.document.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.document.count({ where: { userId } }),
    ]);
    return { items, total, page, limit };
  }

  async deleteByUser(id: string, userId: string) {
    try {
      const deleted = await this.prisma.document.delete({
        where: { id, userId },
      });
      const filePath = join(this.dirPath, deleted.storedName);
      await this.safeUnlink(
        filePath,
        'При удалении конкретного файла по userID',
      );
      return deleted;
    } catch (deleteErr) {
      if (deleteErr instanceof Prisma.PrismaClientKnownRequestError) {
        if (deleteErr.code === 'P2025') {
          this.logger.warn(`Запись не найдена в БД: ${deleteErr}`);
          throw new NotFoundException('Документ не найден');
        }
      }
      throw deleteErr;
    }
  }

  private async safeUnlink(filePath: string, context: string) {
    try {
      await unlink(filePath);
    } catch (unlinkErr) {
      this.logger.warn(
        `Произошла ошибка. Путь до файла: ${filePath}. Откуда: ${context}`,
        unlinkErr instanceof Error ? unlinkErr.stack : String(unlinkErr),
      );
    }
  }

  private async saveChunkEmbedding(
    tx: Prisma.TransactionClient,
    chunkId: string,
    vector: number[],
  ): Promise<void> {
    const vectorText = JSON.stringify(vector);

    const affectedRows = await tx.$executeRaw`
        UPDATE "DocumentChunk"
        SET "embedding" = ${vectorText}::vector
        WHERE "id" = ${chunkId}
      `;
    if (affectedRows !== 1) {
      throw Error(
        `Не удалось сохранить эмбеддинг чанка. Ожидалась 1 обновлённая строка, получено ${affectedRows}. ID чанка ${chunkId}`,
      );
    }
  }
}
