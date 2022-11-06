import { PartialType } from '@nestjs/mapped-types';
import { TecnicaEntity } from './../../tecnicas/entities/tecnica.entity';
import { CreatePetDto } from './create-pet.dto';

export class UpdatePetDto extends PartialType(CreatePetDto) {
  tecnicas: TecnicaEntity[];
}
