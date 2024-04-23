import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// App
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Categoria
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaService } from './categoria/services/categoria.service';
import { CategoriaController } from './categoria/controller/categoria.controller';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produto/produto.module';
import { Produto } from './produto/entities/produto.entity';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_riquezaraizes',
      entities: [Categoria, Produto, Usuario],
      synchronize: true,
    }),
    CategoriaModule,
    ProdutoModule,
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
