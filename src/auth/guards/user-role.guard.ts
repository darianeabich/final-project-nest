import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { UsuarioEntity } from '../../app/usuarios/entities/usuarios.entity';
import { META_PERFIL } from '../decorators/role-protect.decorator';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles: string = this.reflector.get<string>(
      META_PERFIL,
      context.getHandler(),
    );

    // if (!validRoles) return true;
    // if (validRoles.length === 0) return true;

    const req = context.switchToHttp().getRequest();
    const user = req.user as UsuarioEntity;

    if (!user) throw new BadRequestException('User not found (request)');

    if (validRoles.includes(user.perfil)) return true;

    throw new ForbiddenException('User not authorized');
  }
}
