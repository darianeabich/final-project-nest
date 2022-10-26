import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { TematicaEntity } from './../../tematicas/entities/tematica.entity';

@Entity({ name: 'projetos' })
export class ProjetoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, nullable: false })
  titulo: string;

  @Column({ length: 1500, nullable: false })
  descricao: string;

  @Column({ default: true, nullable: false })
  status: boolean;

  @Column({ default: true, nullable: false })
  finalizado: boolean;

  @OneToMany(() => ProjetoEntity, (projeto) => projeto.tematica)
  tematica: TematicaEntity;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @DeleteDateColumn()
  delete_at: string;
}
