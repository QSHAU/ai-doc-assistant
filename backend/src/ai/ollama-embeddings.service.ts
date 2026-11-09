import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmbeddingsProvider } from './embeddings.provider';

interface EmbeddingResponse {
  embeddings: number[][];
}

@Injectable()
export class OllamaEmbeddingsService implements EmbeddingsProvider {
  private readonly baseUrl: string;
  private readonly model: string;
  private readonly dimensions: number;
  private readonly timeout: number;
  private readonly batchSize: number;
  private readonly modelDigest: string;

  constructor(private config: ConfigService) {
    this.baseUrl = this.config.get<string>(
      'OLLAMA_BASE_URL',
      'http://localhost:11434',
    );
    this.model = this.config.get<string>(
      'EMBEDDING_MODEL',
      'embeddinggemma:300m',
    );
    this.dimensions = Number(
      this.config.get<string>('EMBEDDING_DIMENSIONS', '768'),
    );
    this.timeout = Number(
      this.config.get<string>('EMBEDDING_TIMEOUT', '10000'),
    );
    this.batchSize = Number(
      this.config.get<string>('EMBEDDING_BATCH_SIZE', '8'),
    );
    this.modelDigest = this.config.getOrThrow<string>('EMBEDDING_MODEL_DIGEST');

    if (!Number.isInteger(this.dimensions) || this.dimensions <= 0) {
      throw Error('Ошибка с настройкой EMBEDDING_DIMENSIONS');
    }

    if (!Number.isInteger(this.timeout) || this.timeout <= 0) {
      throw Error('Ошибка с настройкой EMBEDDING_TIMEOUT');
    }

    if (!Number.isInteger(this.batchSize) || this.batchSize <= 0) {
      throw Error(
        'Настройка EMBEDDING_BATCH_SIZE должна быть целым положительным числом',
      );
    }

    if (!this.modelDigest.match(/^[0-9a-f]{64}$/i)) {
      throw Error(
        'Настройка EMBEDDING_MODEL_DIGEST должна иметь ровно 64 символа - цифры 0-9 и буквы a-f',
      );
    }
  }
  async embedDocuments(texts: string[]): Promise<number[][]> {
    const arr = texts.map((text) => `title: none | text: ${text}`);

    return await this.embedTexts(arr);
  }
  private async embedTexts(texts: string[]): Promise<number[][]> {
    const resArr: number[][] = [];

    for (let i = 0; i < texts.length; i += this.batchSize) {
      const currentBatch = texts.slice(i, i + this.batchSize);
      const batchVectors = await this.embedBatch(currentBatch);
      resArr.push(...batchVectors);
    }

    return resArr;
  }

  private async embedBatch(texts: string[]): Promise<number[][]> {
    const url = `${this.baseUrl}/api/embed`;
    const postData = {
      model: this.model,
      input: texts,
      truncate: false,
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
        signal: AbortSignal.timeout(this.timeout),
      });

      if (!response.ok) {
        throw Error(`Ошибка ${response.status}`);
      }

      const body: unknown = await response.json();

      if (this.isEmbeddingResponse(body)) {
        if (texts.length === body.embeddings.length) {
          return body.embeddings;
        } else {
          throw Error(
            `Ожидалось ${texts.length} векторов, получено ${body.embeddings.length}`,
          );
        }
      } else {
        throw Error('Неправильная структура');
      }
    } catch (err) {
      if (err instanceof DOMException) {
        if (err.name === 'TimeoutError') {
          throw Error(`Превышено время ожидания: ${this.timeout}ms`, {
            cause: err,
          });
        }
        throw err;
      }
      console.error('Что то не удалось', err);
      throw err;
    }
  }

  getModelName(): string {
    return this.model;
  }

  private isEmbeddingResponse(body: unknown): body is EmbeddingResponse {
    if (!body || typeof body !== 'object' || !('embeddings' in body))
      return false;
    if (!Array.isArray(body.embeddings)) return false;
    return body.embeddings.every((vector) => {
      if (Array.isArray(vector) && vector.length === this.dimensions) {
        return vector.every(
          (value) => typeof value === 'number' && Number.isFinite(value),
        );
      } else {
        return false;
      }
    });
  }
}
