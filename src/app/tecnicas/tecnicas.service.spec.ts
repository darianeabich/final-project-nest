import { Test, TestingModule } from '@nestjs/testing';
import { TecnicasService } from './tecnicas.service';

describe('TecnicasService', () => {
  let service: TecnicasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TecnicasService],
    }).compile();

    service = module.get<TecnicasService>(TecnicasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
