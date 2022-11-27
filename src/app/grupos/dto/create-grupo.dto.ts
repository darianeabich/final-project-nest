import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGrupoDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  projeto: number;
}
