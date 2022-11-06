import { IsNotEmpty } from 'class-validator';
import { TecnicaEntity } from './../../tecnicas/entities/tecnica.entity';

export class CreatePetDto {
  @IsNotEmpty()
  um: number;

  @IsNotEmpty()
  dois: number;

  @IsNotEmpty()
  tecnicas: TecnicaEntity[];
}
