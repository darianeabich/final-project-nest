/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginDto } from '../app/usuarios/dto/login.dto';
import { UsuarioEntity } from '../app/usuarios/entities/usuarios.entity';
import { AuthService } from './auth.service';
import { GetUser } from './decorators/get-usuario.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginUsuario: LoginDto) {
    return await this.authService.login(loginUsuario);
  }

  @Get('private')
  // @Auth(ValidPerfis.PARTICIPANTE)
  async private(@GetUser() user: UsuarioEntity) {
    return {
      ok: true,
      user,
    };
  }
}
