import { IPaginationOptions } from './../../../node_modules/nestjs-typeorm-paginate/dist/interfaces/index.d';
import { EtapaEntity } from './entities/etapa.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEtapaDto } from '../../app/etapas/dto/create-etapa.dto';
import { UpdateEtapaDto } from '../../app/etapas/dto/update-etapa.dto';
import { Repository, FindOneOptions } from 'typeorm';
import { paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class EtapasService {
  constructor(
    @InjectRepository(EtapaEntity)
    private readonly etapaRepository: Repository<EtapaEntity>,
  ) {}

  async findAll(options: IPaginationOptions) {
    const queryBuilder = this.etapaRepository.createQueryBuilder('etapa');

    queryBuilder.select(['etapa.id', 'etapa.titulo', 'etapa.descricao']);
    queryBuilder.orderBy('etapa.id', 'ASC');
    return paginate<EtapaEntity>(queryBuilder, options);
  }

  async findOneOrFail(options: FindOneOptions<EtapaEntity>) {
    try {
      return await this.etapaRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(usuario: CreateEtapaDto) {
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

  async destroy(id: number) {
    await this.etapaRepository.findOneOrFail({ where: { id } });
    this.etapaRepository.softDelete({ id });
  }
}
