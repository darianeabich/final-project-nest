import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from 'nestjs-typeorm-paginate';
import { FindOneOptions, Repository } from 'typeorm';
import { IPaginationOptions } from './../../../node_modules/nestjs-typeorm-paginate/dist/interfaces/index.d';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { ProjetoEntity } from './entities/projeto.entity';

@Injectable()
export class ProjetosService {
  constructor(
    @InjectRepository(ProjetoEntity)
    private readonly projetoRepository: Repository<ProjetoEntity>,
  ) {}

  findAll(options: IPaginationOptions) {
    const queryBuilder = this.projetoRepository.createQueryBuilder('projeto');

    queryBuilder
      .select([
        'projeto.id',
        'projeto.titulo',
        'projeto.descricao',
        'projeto.status',
        'projeto.finalizado',
        'projeto.tematicaId',
        'projeto.usuarioId',
      ])
      .leftJoinAndSelect('projeto.tematica', 'tematica');
    queryBuilder.orderBy('projeto.id', 'ASC');
    return paginate<ProjetoEntity>(queryBuilder, options);
  }

  findOne(id: number) {
    const queryBuilder = this.projetoRepository.createQueryBuilder('projeto');
    queryBuilder
      .select([
        'projeto.id',
        'projeto.titulo',
        'projeto.descricao',
        'projeto.status',
        'projeto.finalizado',
        'projeto.tematicaId',
        'projeto.usuarioId',
      ])
      .leftJoinAndSelect('projeto.tematica', 'tematica')
      .where('projeto.id = :id', { id });

    return queryBuilder;
  }

  async findOneOrFail(options: FindOneOptions<ProjetoEntity>) {
    try {
      return await this.projetoRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(createProjetoDto: CreateProjetoDto) {
    const projetoCriado = this.projetoRepository.create(createProjetoDto);
    return await this.projetoRepository.save(projetoCriado);
  }

  async update(id: number, updateProjetoDto: UpdateProjetoDto) {
    const projetoEncontrado = await this.findOneOrFail({
      where: { id },
    });

    if (projetoEncontrado.titulo !== updateProjetoDto.titulo) {
      projetoEncontrado.titulo = updateProjetoDto.titulo;
    }

    this.projetoRepository.merge(projetoEncontrado, updateProjetoDto);

    return await this.projetoRepository.save(projetoEncontrado);
  }

  async destroy(id: number) {
    await this.projetoRepository.findOneOrFail({ where: { id } });
    this.projetoRepository.softDelete({ id });
  }
}
