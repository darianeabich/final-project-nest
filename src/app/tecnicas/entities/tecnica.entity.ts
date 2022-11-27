import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PetEntity } from './../../pet/entities/pet.entity';

@Entity({ name: 'tecnicas' })
export class TecnicaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, nullable: false })
  titulo: string;

  @Column({ length: 2200, nullable: false })
  descricao: string;

  @Column({ default: true, nullable: false })
  status: boolean;

  @Column({ length: 2000, nullable: false })
  como_usar: string;

  @Column({ length: 2000, nullable: false })
  quando_usar: string;

  @Column({ length: 500, nullable: false })
  material: string;

  @Column({ length: 100, nullable: false })
  tempo: string;

  @Column({ default: 'NORMAL', nullable: false })
  tipo: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @DeleteDateColumn()
  delete_at: string;

  @ManyToOne(() => PetEntity, (pet) => pet.tecnicas)
  pet: PetEntity;
  // @OneToMany(
  //   () => ProjetoEtapaTecnicaEntity,
  //   (projeto_etapa_tecnica) => projeto_etapa_tecnica.tecnica,
  // )
  // projeto_etapa_tecnica: ProjetoEtapaTecnicaEntity[];
}
