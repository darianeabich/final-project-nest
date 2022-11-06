import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TecnicaEntity } from './../../tecnicas/entities/tecnica.entity';

@Entity({ name: 'pet' })
export class PetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  projeto: number;

  @Column({ nullable: false })
  etapa: number;

  @Column({ type: 'json', nullable: false })
  @OneToMany(() => TecnicaEntity, (tecnica) => tecnica.pet)
  tecnicas: TecnicaEntity[];

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @DeleteDateColumn()
  delete_at: string;
}
