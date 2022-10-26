import { TematicaEntity } from './../../tematicas/entities/tematica.entity';
import { IsNotEmpty } from 'class-validator';

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
}
