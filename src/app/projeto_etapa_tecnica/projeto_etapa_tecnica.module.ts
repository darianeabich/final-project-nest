import { Module } from '@nestjs/common';
import { ProjetoEtapaTecnicaService } from './projeto_etapa_tecnica.service';
import { ProjetoEtapaTecnicaController } from './projeto_etapa_tecnica.controller';

@Module({
  controllers: [ProjetoEtapaTecnicaController],
  providers: [ProjetoEtapaTecnicaService]
})
export class ProjetoEtapaTecnicaModule {}
