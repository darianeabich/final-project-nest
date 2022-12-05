import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { PaginationDto } from './../../common/dto/pagination.dto';
import { CreateTematicaDto } from './dto/create-tematica.dto';
import { UpdateTematicaDto } from './dto/update-tematica.dto';
import { TematicaEntity } from './entities/tematica.entity';

@Injectable()
export class TematicasService {
  constructor(
    @InjectRepository(TematicaEntity)
    private tematicasRepository: Repository<TematicaEntity>,
  ) {}

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const tematicas = await this.tematicasRepository.find({
      take: limit,
      skip: offset,
    });

    return tematicas;
  }

  async findOneOrFail(options: FindOneOptions<TematicaEntity>) {
    try {
      return await this.tematicasRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async create(createTematicaDto: CreateTematicaDto) {
    const tematicaCriada = this.tematicasRepository.create(createTematicaDto);
    return await this.tematicasRepository.save(tematicaCriada);
  }

  async update(id: number, updateTematicaDto: UpdateTematicaDto) {
    const tematicaEncontrada = await this.findOneOrFail({
      where: { id },
    });

    if (tematicaEncontrada.titulo !== updateTematicaDto.titulo) {
      tematicaEncontrada.titulo = updateTematicaDto.titulo;
    }

    this.tematicasRepository.merge(tematicaEncontrada, updateTematicaDto);

    return await this.tematicasRepository.save(tematicaEncontrada);
  }

  async remove(id: number) {
    await this.tematicasRepository.findOneOrFail({ where: { id } });
    this.tematicasRepository.softDelete({ id });
  }
}
