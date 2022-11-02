import { Injectable } from '@nestjs/common';
import { CreateProjetoEtapaTecnicaDto } from './dto/create-projeto_etapa_tecnica.dto';
import { UpdateProjetoEtapaTecnicaDto } from './dto/update-projeto_etapa_tecnica.dto';

@Injectable()
export class ProjetoEtapaTecnicaService {
  create(createProjetoEtapaTecnicaDto: CreateProjetoEtapaTecnicaDto) {
    return 'This action adds a new projetoEtapaTecnica';
  }

  findAll() {
    return `This action returns all projetoEtapaTecnica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projetoEtapaTecnica`;
  }

  update(id: number, updateProjetoEtapaTecnicaDto: UpdateProjetoEtapaTecnicaDto) {
    return `This action updates a #${id} projetoEtapaTecnica`;
  }

  remove(id: number) {
    return `This action removes a #${id} projetoEtapaTecnica`;
  }
}
