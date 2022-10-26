import { IsNotEmpty } from 'class-validator';

export class CreateTematicaDto {
  @IsNotEmpty()
  titulo: string;
}
