import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserRoleGuard } from './../guards/user-role.guard';
import { ValidPerfis } from './../interface/valid-perfis';
import { RoleProtect } from './role-protect.decorator';

export function Auth(...roles: ValidPerfis[]) {
  return applyDecorators(
    RoleProtect(...roles),
    UseGuards(AuthGuard(), UserRoleGuard),
  );
}
