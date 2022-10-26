import { TematicaEntity } from './../tematicas/entities/tematica.entity';
import { IPaginationOptions } from './../../../node_modules/nestjs-typeorm-paginate/dist/interfaces/index.d';
import { ProjetoEntity } from './entities/projeto.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class ProjetosService {
  constructor(
    @InjectRepository(ProjetoEntity)
    private readonly projetoRepository: Repository<ProjetoEntity>,
  ) {}

  findAll(options: IPaginationOptions) {
    const queryBuilder = this.projetoRepository.createQueryBuilder('projeto');
    queryBuilder.select(['projeto.id', 'projeto.titulo']);
    queryBuilder.orderBy('projeto.id', 'ASC');
    return paginate<TematicaEntity>(queryBuilder, options);
  }

  findOne(id: number) {
    return `This action returns a #${id} projeto`;
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

  async remove(id: number) {
    await this.projetoRepository.findOneOrFail({ where: { id } });
    this.projetoRepository.softDelete({ id });
  }
}
