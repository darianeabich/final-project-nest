import { EtapaEntity } from './entities/etapa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EtapasService } from './etapas.service';
import { EtapasController } from './etapas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EtapaEntity])],
  controllers: [EtapasController],
  providers: [EtapasService],
  exports: [EtapasService],
})
export class EtapasModule {}
