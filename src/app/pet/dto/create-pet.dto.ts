import { IsNotEmpty } from 'class-validator';
import { TecnicaEntity } from './../../tecnicas/entities/tecnica.entity';

export class CreatePetDto {
  @IsNotEmpty()
  projeto: number;

  @IsNotEmpty()
  etapa: number;

  @IsNotEmpty()
  tecnicas: TecnicaEntity[];
}
