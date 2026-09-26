import { FileValidator } from '@nestjs/common';

export type MinFileSizeValidatorOptions = {
  minSize: number;
};

export class MinFileSizeValidator extends FileValidator<
  MinFileSizeValidatorOptions,
  Express.Multer.File
> {
  isValid(file: Express.Multer.File): boolean {
    return file.size >= this.validationOptions.minSize;
  }

  buildErrorMessage(file: Express.Multer.File): string {
    return `Validation failed: your file size (${file.size}) must be larger or equal to the acceptable (${this.validationOptions.minSize})`;
  }
}
