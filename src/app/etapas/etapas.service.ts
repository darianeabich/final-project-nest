import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateEtapaDto } from '../../app/etapas/dto/create-etapa.dto';
import { UpdateEtapaDto } from '../../app/etapas/dto/update-etapa.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { EtapaEntity } from './entities/etapa.entity';

@Injectable()
export class EtapasService {
  constructor(
    @InjectRepository(EtapaEntity)
    private readonly etapaRepository: Repository<EtapaEntity>,
  ) {}

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const etapas = await this.etapaRepository.find({
      take: limit,
      skip: offset,
    });

    return etapas;
  }

  async findOneOrFail(options: FindOneOptions<EtapaEntity>) {
    try {
      return await this.etapaRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async create(usuario: CreateEtapaDto) {
    const etapaCriada = this.etapaRepository.create(usuario);
    return await this.etapaRepository.save(etapaCriada);
  }

  async update(id: number, body: UpdateEtapaDto) {
    const etapaEncontrada = await this.findOneOrFail({
      where: { id },
    });

    if (etapaEncontrada.titulo !== body.titulo) {
      etapaEncontrada.titulo = body.titulo;
    }

    if (etapaEncontrada.descricao !== body.descricao) {
      etapaEncontrada.descricao = body.descricao;
    }

    this.etapaRepository.merge(etapaEncontrada, body);

    return await this.etapaRepository.save(etapaEncontrada);
  }

  async remove(id: number) {
    await this.etapaRepository.findOneOrFail({ where: { id } });
    this.etapaRepository.softDelete({ id });
  }
}
