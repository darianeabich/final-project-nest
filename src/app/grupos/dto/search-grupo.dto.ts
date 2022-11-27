import { IsInt, IsOptional, IsString } from 'class-validator';
import { PaginationDto } from './../../../common/dto/pagination.dto';
export class SearchGrupoDto extends PaginationDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  titulo?: string;
}
