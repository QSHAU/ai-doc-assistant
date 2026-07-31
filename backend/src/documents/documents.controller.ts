import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { DocumentsService } from './documents.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('documents')
@UseGuards(JwtAuthGuard)
export class DocumentsController {
  constructor(private documentsService: DocumentsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  upload(
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser() user: { id: string },
  ) {
    return this.documentsService.upload(file, user.id);
  }

  @Get()
  findAll(@CurrentUser() user: { id: string }) {
    return this.documentsService.findAll(user.id);
  }

  @Delete(':id')
  deleteByUser(@Param('id') id: string, @CurrentUser() user: { id: string }) {
    return this.documentsService.deleteByUser(id, user.id);
  }
}
