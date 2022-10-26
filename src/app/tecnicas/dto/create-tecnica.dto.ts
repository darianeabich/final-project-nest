import { IsNotEmpty } from 'class-validator';

export class CreateTecnicaDto {
  @IsNotEmpty()
  titulo: string;

  @IsNotEmpty()
  descricao: string;

  @IsNotEmpty()
  status: boolean;

  @IsNotEmpty()
  como_usar: string;

  @IsNotEmpty()
  quando_usar: string;

  @IsNotEmpty()
  material: string;

  @IsNotEmpty()
  tempo: string;

  @IsNotEmpty()
  tipo: string;
}
