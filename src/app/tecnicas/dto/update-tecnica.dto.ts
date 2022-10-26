import { PartialType } from '@nestjs/mapped-types';

import { CreateTecnicaDto } from './create-tecnica.dto';

export class UpdateTecnicaDto extends PartialType(CreateTecnicaDto) {
  titulo: string;

  descricao: string;

  status: boolean;

  como_usar: string;

  quando_usar: string;

  material: string;

  tempo: string;

  tipo: string;
}
