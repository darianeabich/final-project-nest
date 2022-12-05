import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../../auth/auth.module';
import { EtapaEntity } from './entities/etapa.entity';
import { EtapasController } from './etapas.controller';
import { EtapasService } from './etapas.service';

@Module({
  imports: [TypeOrmModule.forFeature([EtapaEntity]), AuthModule],
  controllers: [EtapasController],
  providers: [EtapasService],
  exports: [EtapasService],
})
export class EtapasModule {}
