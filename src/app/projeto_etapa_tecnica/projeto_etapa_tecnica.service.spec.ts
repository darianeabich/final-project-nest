import { Test, TestingModule } from '@nestjs/testing';
import { ProjetoEtapaTecnicaService } from './projeto_etapa_tecnica.service';

describe('ProjetoEtapaTecnicaService', () => {
  let service: ProjetoEtapaTecnicaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjetoEtapaTecnicaService],
    }).compile();

    service = module.get<ProjetoEtapaTecnicaService>(ProjetoEtapaTecnicaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
