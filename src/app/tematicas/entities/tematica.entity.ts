import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProjetoEntity } from '../../projetos/entities/projeto.entity';

@Entity({ name: 'tematicas' })
export class TematicaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, nullable: false, unique: true })
  titulo: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @DeleteDateColumn()
  delete_at: string;

  @OneToMany(() => ProjetoEntity, (projeto) => projeto.tematica)
  projeto: ProjetoEntity[];

  addProjeto(project: ProjetoEntity) {
    if (this.projeto == null) {
      this.projeto = new Array<ProjetoEntity>();
    }
    this.projeto.push(project);
  }
}
