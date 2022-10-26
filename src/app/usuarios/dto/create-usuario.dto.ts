import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { MessagesHelpers } from 'src/helpers/messages.helpers';
import { RegExHelper } from 'src/helpers/regex.helpers';

export class CreateUsuarioDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  cod_institucional: string;

  @IsNotEmpty()
  @Matches(RegExHelper.password, { message: MessagesHelpers.PASSWORD_VALID })
  senha: string;

  @IsNotEmpty()
  perfil: string;

  @IsNotEmpty()
  status: boolean;
}
