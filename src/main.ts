import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const PORT = 4000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  // PORT esta sendo declarada no começo do codigo
  // para melhor visualização criei um log para a rota
  await app.listen(PORT);
  console.log(`Rodando em http://localhost:${PORT}`);
}
bootstrap();
