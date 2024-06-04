import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const PORT = process.env.PORT || 4000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Riqueza das Raizes')
    .setDescription('Projeto Integrador')
    .setContact(
      'Riqueza das Raizes',
      'https://github.com/Riquezas-Das-Raizes',
      'riquezadasraizes@gmail.com',
    )
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  // PORT esta sendo declarada no começo do codigo
  // para melhor visualização criei um log para a rota
  await app.listen(PORT);
  console.log(`Rodando em http://localhost:${PORT}`);
}
bootstrap();
