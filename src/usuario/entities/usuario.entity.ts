import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, IsEmail } from 'class-validator';
import { Produto } from 'src/produto/entities/produto.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @IsEmail()
  @Column({ length: 100, nullable: false })
  usuario: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  senha: string;

  @Column({ length: 1000, nullable: true })
  imagem: string;

  @OneToMany(() => Produto, (produto) => produto.usuario)
  produto: Produto[];
}
