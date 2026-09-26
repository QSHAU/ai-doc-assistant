import { Module } from '@nestjs/common';
import { DocumentsController } from './documents.controller';
import { DocumentsService } from './documents.service';
import { DocumentParserService } from './document-parser.service';

@Module({
  controllers: [DocumentsController],
  providers: [DocumentsService, DocumentParserService],
})
export class DocumentsModule {}
