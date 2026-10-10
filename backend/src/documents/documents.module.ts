import { Module } from '@nestjs/common';
import { DocumentsController } from './documents.controller';
import { DocumentsService } from './documents.service';
import { DocumentParserService } from './document-parser.service';
import { AiModule } from '../ai/ai.module';

@Module({
  imports: [AiModule],
  controllers: [DocumentsController],
  providers: [DocumentsService, DocumentParserService],
})
export class DocumentsModule {}
