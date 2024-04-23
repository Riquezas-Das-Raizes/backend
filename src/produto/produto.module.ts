import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Produto } from './entities/produto.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  providers: [],
  controllers: [],
  exports: [TypeOrmModule],
})

export class ProdutoModule {}