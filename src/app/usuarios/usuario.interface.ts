import { Roles } from '../../helpers/roles';

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  cod_institucional: string;
  senha: string;
  perfil: Roles;
  status: boolean;
}
