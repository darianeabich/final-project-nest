import { Test, TestingModule } from '@nestjs/testing';
import { TematicasController } from './tematicas.controller';
import { TematicasService } from './tematicas.service';

describe('TematicasController', () => {
  let controller: TematicasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TematicasController],
      providers: [TematicasService],
    }).compile();

    controller = module.get<TematicasController>(TematicasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
