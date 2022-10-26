import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tematicas' })
export class TematicaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, nullable: false, unique: true })
  titulo: string;
}
