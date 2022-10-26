import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateTematicaDto } from './create-tematica.dto';

export class UpdateTematicaDto extends PartialType(CreateTematicaDto) {
  @IsNotEmpty()
  titulo: string;
}
