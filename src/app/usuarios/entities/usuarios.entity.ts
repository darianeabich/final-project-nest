import { hashSync } from 'bcrypt';
import { Exclude } from 'class-transformer';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProjetoEntity } from '../../projetos/entities/projeto.entity';

@Entity({ name: 'usuarios' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, nullable: false })
  nome: string;

  @Column({ length: 255, unique: true, nullable: false })
  email: string;

  @Column({ length: 15, unique: true, nullable: false })
  cod_institucional: string;

  @Exclude({
    toPlainOnly: true,
  })
  @Column({ length: 180, nullable: false })
  senha: string;

  @Column({ default: 'PARTICIPANTE', nullable: false })
  perfil: string;

  @Column({ default: true, nullable: false })
  status: boolean;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @DeleteDateColumn()
  delete_at: string;

  @BeforeInsert()
  hashPassword() {
    this.senha = hashSync(this.senha, 8);
  }

  @OneToMany(() => ProjetoEntity, (projeto) => projeto.usuario)
  projeto: ProjetoEntity[];

  addProjeto(project: ProjetoEntity) {
    if (this.projeto == null) {
      this.projeto = new Array<ProjetoEntity>();
    }
    this.projeto.push(project);
  }
}
