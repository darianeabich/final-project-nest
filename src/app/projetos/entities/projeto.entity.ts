import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { GrupoEntity } from './../../grupos/entities/grupo.entity';
import { UsuarioEntity } from './../../usuarios/entities/usuarios.entity';

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

  @Column({ nullable: false })
  tematicaId: TematicaEntity;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @DeleteDateColumn()
  delete_at: string;

  @ManyToOne(() => TematicaEntity, (tematica) => tematica.projeto)
  tematica: TematicaEntity;

  @ManyToOne(() => UsuarioEntity, (usuario) => usuario.projeto)
  usuario: UsuarioEntity;

  @ManyToMany(() => UsuarioEntity)
  @JoinTable()
  usuario_participante: UsuarioEntity[];

  @OneToMany(() => GrupoEntity, (grupo) => grupo.projeto)
  grupos?: GrupoEntity[];

  // @OneToMany(
  //   () => ProjetoEtapaTecnicaEntity,
  //   (projeto_etapa_tecnica) => projeto_etapa_tecnica.projeto,
  // )
  // projeto_etapa_tecnica: ProjetoEtapaTecnicaEntity[];

  // @OneToOne(() => UsuarioEntity)
  // @JoinColumn()
  // usuario: UsuarioEntity;

  // @ManyToMany(() => EtapaEntity)
  // @JoinTable({
  //   name: 'projeto_etapa_tecnica',
  //   joinColumn: {
  //     name: 'projetoId',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'etapaId',
  //     referencedColumnName: 'id',
  //   },
  // })
  // etapas: EtapaEntity[];

  // @ManyToMany(() => TecnicaEntity)
  // @JoinTable({
  //   name: 'projeto_etapa_tecnica',
  //   joinColumn: {
  //     name: 'projetoId',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'tecnicaId',
  //     referencedColumnName: 'id',
  //   },
  // })
  // tecnicas: TecnicaEntity[];
}
