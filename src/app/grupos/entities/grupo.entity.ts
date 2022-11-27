import { IsInt, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProjetoEntity } from './../../projetos/entities/projeto.entity';

@Entity({ name: 'grupos' })
export class GrupoEntity {
  @IsInt()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ length: 45, nullable: false })
  titulo: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @DeleteDateColumn()
  delete_at: string;

  @ManyToOne(() => ProjetoEntity, (projeto) => projeto.grupos, {
    cascade: true,
    eager: true,
  })
  projeto: ProjetoEntity;
}
