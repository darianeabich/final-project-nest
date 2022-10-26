import { Test, TestingModule } from '@nestjs/testing';
import { TecnicasController } from './tecnicas.controller';
import { TecnicasService } from './tecnicas.service';

describe('TecnicasController', () => {
  let controller: TecnicasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TecnicasController],
      providers: [TecnicasService],
    }).compile();

    controller = module.get<TecnicasController>(TecnicasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
