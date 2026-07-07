import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'Некорректный email' })
  email!: string;

  @IsOptional()
  @IsString()
  @MinLength(2, { message: 'Имя не должно быть короче 2 символов' })
  name!: string | null;

  @IsString()
  @MinLength(8, { message: 'Пароль должен быть не короче 8 символов' })
  password!: string;
}
