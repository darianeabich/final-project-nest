import { IsEmail, IsOptional } from 'class-validator';

export class UpdateUsuarioDto {
  @IsOptional()
  nome?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  cod_institucional?: string;

  @IsOptional()
  status?: boolean;
}
