import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { PaginationDto } from './../../common/dto/pagination.dto';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { ProjetoEntity } from './entities/projeto.entity';

@Injectable()
export class ProjetosService {
  constructor(
    @InjectRepository(ProjetoEntity)
    private readonly projetoRepository: Repository<ProjetoEntity>,
  ) {}

  async findAll(paginationDto?: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const projetos = await this.projetoRepository.find({
      take: limit,
      skip: offset,
      relations: {
        tematica: true,
        usuario: true,
      },
    });

    return projetos.map((projeto) => ({
      ...projeto,
      tematica: projeto.tematica.titulo,
      usuario: projeto.usuario.id,
    }));
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
        'projeto.usuario',
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

  async findByUser(id: number) {
    const projetos = await this.projetoRepository.find({
      where: {
        usuario: {
          id: id,
        },
      },
      relations: {
        tematica: true,
        usuario: true,
      },
    });

    // projetos.map((projeto) => ({
    //   ...projeto,
    //   tematica: projeto.tematica.titulo,
    //   usuario: projeto.usuario.id,
    // }));
    // const qb = this.projetoRepository.createQueryBuilder('projeto');
    // qb.select(['projeto.id', 'projeto.titulo', 'projeto.tematica']);

    return projetos;
  }

  async create(createProjetoDto: CreateProjetoDto) {
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

  async remove(id: number) {
    await this.projetoRepository.findOneOrFail({ where: { id } });
    this.projetoRepository.softDelete({ id });
  }
}
