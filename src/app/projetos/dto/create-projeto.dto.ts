import { IsNotEmpty } from 'class-validator';
import { UsuarioEntity } from '../../usuarios/entities/usuarios.entity';
import { TematicaEntity } from './../../tematicas/entities/tematica.entity';

export class CreateProjetoDto {
  @IsNotEmpty()
  titulo: string;

  @IsNotEmpty()
  descricao: string;

  @IsNotEmpty()
  status: boolean;

  @IsNotEmpty()
  finalizado: boolean;

  @IsNotEmpty()
  tematica: TematicaEntity;

  @IsNotEmpty()
  usuario: UsuarioEntity;
}
