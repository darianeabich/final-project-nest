import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProjetoEntity } from '../../projetos/entities/projeto.entity';

@Entity({ name: 'tematicas' })
export class TematicaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, nullable: false, unique: true })
  titulo: string;

  @OneToMany(() => ProjetoEntity, (projeto) => projeto.tematica)
  projeto: ProjetoEntity[];
}
