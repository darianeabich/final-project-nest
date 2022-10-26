import { PartialType } from '@nestjs/mapped-types';

import { CreateEtapaDto } from './create-etapa.dto';

export class UpdateEtapaDto extends PartialType(CreateEtapaDto) {
  titulo: string;

  descricao: string;

  status: boolean;
}
