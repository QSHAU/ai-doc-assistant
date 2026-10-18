import { Module } from '@nestjs/common';
import { OllamaEmbeddingsService } from './ollama-embeddings.service';
import { EmbeddingsProvider } from './embeddings.provider';

@Module({
  exports: [EmbeddingsProvider],
  providers: [
    {
      provide: EmbeddingsProvider,
      useClass: OllamaEmbeddingsService,
    },
  ],
})
export class AiModule {}
