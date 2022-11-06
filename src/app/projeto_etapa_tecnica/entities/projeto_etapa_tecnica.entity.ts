// import {
//   CreateDateColumn,
//   DeleteDateColumn,
//   Entity,
//   PrimaryColumn,
//   UpdateDateColumn,
// } from 'typeorm';

// @Entity({ name: 'projeto_etapa_tecnica' })
// export class ProjetoEtapaTecnicaEntity {
//   @PrimaryColumn()
//   projetoId: number;

//   @PrimaryColumn()
//   etapaId: number;

//   @PrimaryColumn()
//   tecnicaId: number;

//   @CreateDateColumn()
//   created_at: string;

//   @UpdateDateColumn()
//   updated_at: string;

//   @DeleteDateColumn()
//   delete_at: string;

//   // @ManyToOne(() => ProjetoEntity, (projeto) => projeto.projeto_etapa_tecnica)
//   // projeto: ProjetoEntity;

//   // @ManyToOne(() => EtapaEntity, (etapa) => etapa.projeto_etapa_tecnica)
//   // etapa: EtapaEntity;

//   //   @ManyToOne(() => TecnicaEntity, (tecnica) => tecnica.projeto_etapa_tecnica)
//   //   tecnica: TecnicaEntity;
// }
