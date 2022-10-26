import { Module } from '@nestjs/common';
import { TematicasService } from './tematicas.service';
import { TematicasController } from './tematicas.controller';
import { TematicaEntity } from './entities/tematica.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TematicaEntity])],
  controllers: [TematicasController],
  providers: [TematicasService],
})
export class TematicasModule {}
