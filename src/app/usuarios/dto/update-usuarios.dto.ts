import { IsEmail } from 'class-validator';

export class UpdateUsuarioDto {
  nome: string;

  @IsEmail()
  email: string;

  cod_institucional: string;

  status: boolean;
}
