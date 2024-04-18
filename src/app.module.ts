import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// App
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Categoria
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaService } from './categoria/services/categoria.service';
import { CategoriaController } from './categoria/controller/categoria.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_riquezaraizes',
      entities: [Categoria],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
