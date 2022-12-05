import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { PaginationDto } from './../../common/dto/pagination.dto';
import { CreateTecnicaDto } from './dto/create-tecnica.dto';
import { UpdateTecnicaDto } from './dto/update-tecnica.dto';
import { TecnicaEntity } from './entities/tecnica.entity';

@Injectable()
export class TecnicasService {
  constructor(
    @InjectRepository(TecnicaEntity)
    private readonly tecnicaRepository: Repository<TecnicaEntity>,
  ) {}

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const tecnicas = await this.tecnicaRepository.find({
      take: limit,
      skip: offset,
    });

    return tecnicas;
  }

  findOneById(id: number) {
    const tecnica = this.tecnicaRepository.findOne({ where: { id } });

    if (!tecnica) throw new NotFoundException(`Técnica #{id} not found`);

    return tecnica;
  }

  async findOneOrFail(options: FindOneOptions<TecnicaEntity>) {
    try {
      return await this.tecnicaRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async create(createTecnicaDto: CreateTecnicaDto) {
    const tecnicaCriada = this.tecnicaRepository.create(createTecnicaDto);
    return await this.tecnicaRepository.save(tecnicaCriada);
  }

  async update(id: number, updateTecnicaDto: UpdateTecnicaDto) {
    const tecnicaEncontrada = await this.findOneOrFail({
      where: { id },
    });

    if (tecnicaEncontrada.titulo !== updateTecnicaDto.titulo) {
      tecnicaEncontrada.titulo = updateTecnicaDto.titulo;
    }

    if (tecnicaEncontrada.descricao !== updateTecnicaDto.descricao) {
      tecnicaEncontrada.descricao = updateTecnicaDto.descricao;
    }

    if (tecnicaEncontrada.como_usar !== updateTecnicaDto.como_usar) {
      tecnicaEncontrada.como_usar = updateTecnicaDto.como_usar;
    }

    if (tecnicaEncontrada.quando_usar !== updateTecnicaDto.quando_usar) {
      tecnicaEncontrada.quando_usar = updateTecnicaDto.quando_usar;
    }

    if (tecnicaEncontrada.material !== updateTecnicaDto.material) {
      tecnicaEncontrada.material = updateTecnicaDto.material;
    }

    if (tecnicaEncontrada.tempo !== updateTecnicaDto.tempo) {
      tecnicaEncontrada.tempo = updateTecnicaDto.tempo;
    }

    if (tecnicaEncontrada.tipo !== updateTecnicaDto.tipo) {
      tecnicaEncontrada.tipo = updateTecnicaDto.tipo;
    }

    if (tecnicaEncontrada.status !== updateTecnicaDto.status) {
      tecnicaEncontrada.status = updateTecnicaDto.status;
    }

    this.tecnicaRepository.merge(tecnicaEncontrada, updateTecnicaDto);

    return await this.tecnicaRepository.save(tecnicaEncontrada);
  }

  async remove(id: number) {
    await this.findOneOrFail({ where: { id } });
    this.tecnicaRepository.softDelete(id);
  }
}
