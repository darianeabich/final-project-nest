/* eslint-disable prettier/prettier */
import { SetMetadata } from '@nestjs/common';

export const Role = (role: string) => SetMetadata('role', role);


// alterar comportamento de uma variável, função, método, classe, etc
// ou metadados