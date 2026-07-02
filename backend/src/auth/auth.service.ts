import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async register(email: string, password: string) {
    // 1. Проверяем, что email ещё не занят
    const existing = await this.usersService.findByEmail(email);
    if (existing) {
      throw new ConflictException('Пользователь с таким email уже существует');
    }

    // 2. Хешируем пароль
    const passwordHash = await bcrypt.hash(password, 10);

    // 3. Создаём пользователя и выдаём ему токен
    const user = await this.usersService.create(email, passwordHash);
    return this.signToken(user.id, user.email);
  }

  async login(email: string, password: string) {
    // 1. Находим пользователя
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Неверный email или пароль');
    }

    // 2. Сверяем введённый пароль с хешем из БД
    const passwordMatches = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatches) {
      throw new UnauthorizedException('Неверный email или пароль');
    }

    // 3. Выдаём токен
    return this.signToken(user.id, user.email);
  }

  // Приватный помощник: создаёт подписанный JWT
  private async signToken(userId: string, email: string) {
    const payload = { sub: userId, email };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }
}
