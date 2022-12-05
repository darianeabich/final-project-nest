import { SetMetadata } from '@nestjs/common';
import { ValidPerfis } from '../interface/valid-perfis';

export const META_PERFIL = 'perfil';

export const RoleProtect = (...args: ValidPerfis[]) => {
  return SetMetadata(META_PERFIL, args);
};
