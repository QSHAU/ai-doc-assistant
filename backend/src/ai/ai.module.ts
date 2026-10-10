import { Module } from '@nestjs/common';
import { OllamaEmbeddingsService } from './ollama-embeddings.service';

@Module({
  exports: [OllamaEmbeddingsService],
  providers: [OllamaEmbeddingsService],
})
export class AiModule {}
