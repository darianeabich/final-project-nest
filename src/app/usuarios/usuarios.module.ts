import { UsuariosSignUpController } from './sign-up/usuario-sign-up.controller';
/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { UsuarioEntity } from './entities/usuarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [UsuariosController, UsuariosSignUpController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
