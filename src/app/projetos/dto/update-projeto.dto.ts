import { PartialType } from '@nestjs/mapped-types';

import { TematicaEntity } from './../../tematicas/entities/tematica.entity';
import { CreateProjetoDto } from './create-projeto.dto';

export class UpdateProjetoDto extends PartialType(CreateProjetoDto) {
  titulo: string;

  descricao: string;

  status: boolean;

  finalizado: boolean;

  tematica: TematicaEntity;
}
