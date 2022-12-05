/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { LoginDto } from '../app/usuarios/dto/login.dto';
import { UsuarioEntity } from '../app/usuarios/entities/usuarios.entity';
import { JwtPayload } from './interface/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async login(usuario: LoginDto) {
    const { senha, email } = usuario;

    const user = await this.usuarioRepository.findOne({
      where: { email },
      select: { email: true, id: true, perfil: true, nome: true },
    });

    // if (!user) throw new UnauthorizedException('Credentials are no valid');

    // if (!bcrypt.compareSync(senha, user.senha))
    //   throw new UnauthorizedException('Credentials are no valid');

    // return {
    //   ...user,
    //   token: this.getJwtToken({
    //     id: user.id,
    //     perfil: user.perfil,
    //     nome: user.nome,
    //   }),
    const payload = { id: user.id, usuario: user.perfil, nome: user.nome };
    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
    };
  }

  getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }

  async validarUsuario(email: string, senha: string): Promise<any> {
    const usuario = await this.findOne(email);
    if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
      const { senha, ...result } = usuario;
      return result;
    }
    return null;
  }

  async findOne(email: string): Promise<UsuarioEntity | undefined> {
    return this.usuarioRepository.findOne({ where: { email: email } });
  }
}
