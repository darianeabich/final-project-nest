import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'etapas' })
export class EtapaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, nullable: false })
  titulo: string;

  @Column({ length: 1500, nullable: false })
  descricao: string;

  @Column({ default: true })
  status: boolean;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @DeleteDateColumn()
  delete_at: string;

  // @OneToMany(
  //   () => ProjetoEtapaTecnicaEntity,
  //   (projeto_etapa_tecnica) => projeto_etapa_tecnica.etapa,
  // )
  // projeto_etapa_tecnica: ProjetoEtapaTecnicaEntity[];

  // @ManyToMany(() => TecnicaEntity)
  // @JoinTable()
  // tecnicas: TecnicaEntity[];
}
