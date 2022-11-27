import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateParticipacaoDto {
  @IsNumber()
  @IsNotEmpty()
  projetosId: number;

  @IsNumber()
  @IsNotEmpty()
  usuariosId: number;

  @IsBoolean()
  @IsNotEmpty()
  fl_aceito: boolean;
}
