import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './../../auth/auth.module';
import { TecnicaEntity } from './entities/tecnica.entity';
import { TecnicasController } from './tecnicas.controller';
import { TecnicasService } from './tecnicas.service';

@Module({
  imports: [TypeOrmModule.forFeature([TecnicaEntity]), AuthModule],
  controllers: [TecnicasController],
  providers: [TecnicasService],
  exports: [TecnicasService],
})
export class TecnicasModule {}
