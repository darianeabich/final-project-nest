import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { Participacao } from './entities/participacao.entity';
import { ParticipacaoController } from './participacao.controller';
import { ParticipacaoService } from './participacao.service';

@Module({
  imports: [TypeOrmModule.forFeature([Participacao]), UsuariosModule],
  controllers: [ParticipacaoController],
  providers: [ParticipacaoService],
  exports: [ParticipacaoService],
})
export class ParticipacaoModule {}
