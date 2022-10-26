import { Test, TestingModule } from '@nestjs/testing';
import { TematicasService } from './tematicas.service';

describe('TematicasService', () => {
  let service: TematicasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TematicasService],
    }).compile();

    service = module.get<TematicasService>(TematicasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
