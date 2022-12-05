import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './../../auth/auth.module';
import { TematicaEntity } from './entities/tematica.entity';
import { TematicasController } from './tematicas.controller';
import { TematicasService } from './tematicas.service';

@Module({
  imports: [TypeOrmModule.forFeature([TematicaEntity]), AuthModule],
  controllers: [TematicasController],
  providers: [TematicasService],
})
export class TematicasModule {}
