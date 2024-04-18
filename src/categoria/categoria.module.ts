import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Categoria } from './entities/categoria.entity';



@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  providers: [],
  controllers: [],
  exports: [TypeOrmModule],
})

export class CategoriaModule {}