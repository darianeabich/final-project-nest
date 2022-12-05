import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { UsuarioEntity } from '../../app/usuarios/entities/usuarios.entity';
import { JwtPayload } from '../interface/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,

    configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExperiration: false,
      secretOrKey: configService.get('JWT_SECRET_KEY'),
    });
  }

  async validate(payload: JwtPayload) {
    const { id, perfil, nome } = payload;

    const usuario = await this.usuarioRepository.findOneBy({ id });

    if (!usuario) throw new UnauthorizedException('Token not valid');

    if (!usuario.status)
      throw new UnauthorizedException(
        'User not active, talk to the administrator',
      );

    // console.log('usuario: ', usuario);

    return usuario;
  }
}
