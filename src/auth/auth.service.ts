/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { UsuarioEntity } from '../app/usuarios/entities/usuarios.entity';
import { UsuariosService } from './../app/usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async login(usuario) {
    const payload = {
      sub: usuario.id,
      email: usuario.email,
      perfil: usuario.perfil,
      nome: usuario.nome,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, senha: string): Promise<any> {
    let usuario: UsuarioEntity;
    try {
      usuario = await this.usuarioService.findOneOrFail({ where: { email } });
    } catch {
      return null;
    }

    const isPasswordValid = compareSync(senha, usuario.senha);
    if (!isPasswordValid) {
      return null;
    }

    return usuario;
  }
}
