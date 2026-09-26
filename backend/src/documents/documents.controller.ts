import {
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { DocumentsService } from './documents.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { MinFileSizeValidator } from './validators/min-file-size.validator';
import { ListDocumentsQueryDto } from './dto/documents.dto';

@Controller('documents')
@UseGuards(JwtAuthGuard)
export class DocumentsController {
  constructor(private documentsService: DocumentsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      limits: { fileSize: 10_485_760 },
      defParamCharset: 'utf8',
    }),
  )
  upload(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MinFileSizeValidator({ minSize: 1 }),
          new MaxFileSizeValidator({ maxSize: 10_485_760 }),
          new FileTypeValidator({
            fileType: '^(text/plain|application/pdf)$',
            fallbackToMimetype: true,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
    @CurrentUser() user: { id: string },
  ) {
    return this.documentsService.upload(file, user.id);
  }

  @Get()
  findAll(
    @Query()
    query: ListDocumentsQueryDto,
    @CurrentUser()
    user: {
      id: string;
    },
  ) {
    return this.documentsService.findAll(user.id, query);
  }

  @Delete(':id')
  deleteByUser(@Param('id') id: string, @CurrentUser() user: { id: string }) {
    return this.documentsService.deleteByUser(id, user.id);
  }
}
