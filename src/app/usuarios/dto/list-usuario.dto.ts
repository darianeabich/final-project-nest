import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class ListUsuarioDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  perfil: string;

  @IsNotEmpty()
  status: string;
}
