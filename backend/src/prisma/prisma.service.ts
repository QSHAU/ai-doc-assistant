import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(config: ConfigService) {
    super({
      adapter: new PrismaPg({
        connectionString: config.get('DATABASE_URL'),
      }),
    });
  }
  async onModuleInit() {
    await this.$connect();
  }

  // Вызывается при остановке приложения — аккуратно закрываем соединение.
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
