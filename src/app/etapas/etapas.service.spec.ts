import { Test, TestingModule } from '@nestjs/testing';
import { EtapasService } from './etapas.service';

describe('EtapasService', () => {
  let service: EtapasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EtapasService],
    }).compile();

    service = module.get<EtapasService>(EtapasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
