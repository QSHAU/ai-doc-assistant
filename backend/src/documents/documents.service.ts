import {
  BadRequestException,
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
import { Prisma } from '../../generated/prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DocumentsService implements OnModuleInit {
  private readonly logger = new Logger(DocumentsService.name);
  private readonly dirPath: string;

  constructor(
    private config: ConfigService,
    private prisma: PrismaService,
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
  }) {
    return this.prisma.document.create({
      data,
    });
  }

  async upload(file: Express.Multer.File, userId: string) {
    if (!file) {
      throw new BadRequestException('Файл обязателен');
    }
    const fullFileName = file.originalname;
    const uniqName = `${randomUUID()}${extname(fullFileName)}`;
    const filePath = join(this.dirPath, uniqName);
    const mimeType = file.mimetype;
    const data = {
      userId,
      filename: fullFileName,
      storedName: uniqName,
      mimeType,
    };
    await writeFile(filePath, file.buffer);
    try {
      return await this.create(data);
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
  }

  findAll(userId: string) {
    return this.prisma.document.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
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
}
