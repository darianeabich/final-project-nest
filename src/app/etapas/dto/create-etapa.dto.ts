/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateEtapaDto {
  @IsNotEmpty()
  titulo: string;

  @IsNotEmpty()
  descricao: string;

  @IsNotEmpty()
  status: boolean;
}

