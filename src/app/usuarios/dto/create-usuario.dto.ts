import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
} from 'class-validator';
import { MessagesHelpers } from 'src/helpers/messages.helpers';
import { RegExHelper } from 'src/helpers/regex.helpers';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  cod_institucional: string;

  @IsNotEmpty()
  @Matches(RegExHelper.password, { message: MessagesHelpers.PASSWORD_VALID })
  senha: string;

  @IsNotEmpty()
  perfil: string;

  @IsNotEmpty()
  @IsBoolean()
  status: boolean;
}
