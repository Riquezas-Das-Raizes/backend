import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Produto } from '../../produto/entities/produto.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';

@Injectable()
export class DevService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootroot',
      database: 'db_riquezaraizes',
      entities: [Produto, Categoria, Usuario],
      synchronize: true,
    };
  }
}
