import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './../../auth/auth.module';
import { Participacao } from './entities/participacao.entity';
import { ParticipacaoController } from './participacao.controller';
import { ParticipacaoService } from './participacao.service';

@Module({
  imports: [TypeOrmModule.forFeature([Participacao]), AuthModule],
  controllers: [ParticipacaoController],
  providers: [ParticipacaoService],
  exports: [ParticipacaoService],
})
export class ParticipacaoModule {}
