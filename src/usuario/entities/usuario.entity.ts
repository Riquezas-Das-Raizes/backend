import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, IsEmail } from 'class-validator';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  imagem: string;
  
  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: "CASCADE"
  })
  categoria: Categoria;
}
