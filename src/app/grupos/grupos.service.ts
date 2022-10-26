import { Injectable } from '@nestjs/common';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';

@Injectable()
export class GruposService {
  create(createGrupoDto: CreateGrupoDto) {
    return 'This action adds a new grupo';
  }

  findAll() {
    return `This action returns all grupos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grupo`;
  }

  update(id: number, updateGrupoDto: UpdateGrupoDto) {
    return `This action updates a #${id} grupo`;
  }

  remove(id: number) {
    return `This action removes a #${id} grupo`;
  }
}
