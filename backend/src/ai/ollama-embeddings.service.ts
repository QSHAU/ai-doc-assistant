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

    if (!Number.isInteger(this.dimensions) || this.dimensions <= 0) {
      throw Error('Ошибка с настройкой EMBEDDING_DIMENSIONS');
    }

    if (!Number.isInteger(this.timeout) || this.timeout <= 0) {
      throw Error('Ошибка с настройкой EMBEDDING_TIMEOUT');
    }
  }
  async embedTexts(texts: string[]): Promise<number[][]> {
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
