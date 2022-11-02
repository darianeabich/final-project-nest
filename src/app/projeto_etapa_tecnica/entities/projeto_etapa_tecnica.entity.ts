import { Entity, JoinTable, ManyToMany } from 'typeorm';
import { EtapaEntity } from '../../etapas/entities/etapa.entity';
import { ProjetoEntity } from './../../projetos/entities/projeto.entity';
import { TecnicaEntity } from './../../tecnicas/entities/tecnica.entity';

@Entity('projeto_etapa_tecnica')
export class ProjetoEtapaTecnica {
  @ManyToMany(() => ProjetoEntity)
  @JoinTable()
  projeto: number;

  @ManyToMany(() => EtapaEntity)
  @JoinTable()
  etapa: number;

  @ManyToMany(() => TecnicaEntity)
  @JoinTable()
  tecnica: number[];
}
