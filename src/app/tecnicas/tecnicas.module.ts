import { Module } from '@nestjs/common';
import { TecnicasService } from './tecnicas.service';
import { TecnicasController } from './tecnicas.controller';
import { TecnicaEntity } from './entities/tecnica.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TecnicaEntity])],
  controllers: [TecnicasController],
  providers: [TecnicasService],
  exports: [TecnicasService],
})
export class TecnicasModule {}
