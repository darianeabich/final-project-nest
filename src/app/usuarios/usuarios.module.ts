import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../../auth/auth.module';
import { UsuarioEntity } from './entities/usuarios.entity';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity]), AuthModule],

  controllers: [UsuariosController],

  providers: [UsuariosService],

  exports: [UsuariosService],
})
export class UsuariosModule {}
