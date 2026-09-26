import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // выбрасывать из тела поля, которых нет в DTO
      forbidNonWhitelisted: true, // лишнее поле → 400 с текстом "property <поле> should not exist"
      transform: true, // приводить сырой JSON к экземпляру класса DTO
    }),
  );

  app.enableCors(); // разрешить запросы с другого origin
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
