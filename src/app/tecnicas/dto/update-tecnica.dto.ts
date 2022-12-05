import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { CreateTecnicaDto } from './create-tecnica.dto';

export class UpdateTecnicaDto extends PartialType(CreateTecnicaDto) {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsBoolean()
  status?: boolean;

  @IsOptional()
  @IsString()
  como_usar?: string;

  @IsOptional()
  @IsString()
  quando_usar?: string;

  @IsOptional()
  @IsString()
  material?: string;

  @IsOptional()
  @IsString()
  tempo?: string;

  @IsOptional()
  @IsString()
  tipo?: string;
}
