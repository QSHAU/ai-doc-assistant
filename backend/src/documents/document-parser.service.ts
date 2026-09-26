import { Injectable } from '@nestjs/common';
import { readFile } from 'node:fs/promises';
import { PDFParse } from 'pdf-parse';

@Injectable()
export class DocumentParserService {
  parse(filePath: string, mimeType: string): Promise<string> {
    switch (mimeType) {
      case 'text/plain':
        return this.parseTxt(filePath);

      case 'application/pdf':
        return this.parsePdf(filePath);

      default:
        throw new Error('Неподдерживаемый формат документа');
    }
  }
  parseTxt(filePath: string): Promise<string> {
    return readFile(filePath, 'utf-8');
  }
  async parsePdf(filePath: string): Promise<string> {
    const buffer = await readFile(filePath);
    const parser = new PDFParse({ data: buffer });

    try {
      return (await parser.getText()).text;
    } finally {
      await parser.destroy();
    }
  }
}
