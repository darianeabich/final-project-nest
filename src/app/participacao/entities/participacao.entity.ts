import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'participacao' })
export class Participacao {
  @PrimaryColumn()
  projetosId: number;

  @PrimaryColumn()
  usuariosId: number;

  @Column({ default: false, nullable: false })
  fl_aceito: boolean;
}
