/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { EtapasController } from './etapas.controller';
import { EtapasService } from './etapas.service';

describe('EtapasController', () => {
  let controller: EtapasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtapasController],
      providers: [EtapasService],
    }).compile();

    controller = module.get<EtapasController>(EtapasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
