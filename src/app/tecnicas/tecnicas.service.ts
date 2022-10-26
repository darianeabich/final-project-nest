import { IPaginationOptions } from './../../../node_modules/nestjs-typeorm-paginate/dist/interfaces/index.d';
import { TecnicaEntity } from './entities/tecnica.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTecnicaDto } from './dto/create-tecnica.dto';
import { UpdateTecnicaDto } from './dto/update-tecnica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class TecnicasService {
  constructor(
    @InjectRepository(TecnicaEntity)
    private readonly tecnicaRepository: Repository<TecnicaEntity>,
  ) {}

  async findAll(options: IPaginationOptions) {
    const queryBuilder = this.tecnicaRepository.createQueryBuilder('tecnica');
    queryBuilder.select([
      'tecnica.id',
      'tecnica.titulo',
      'tecnica.descricao',
      'tecnica.como_usar',
      'tecnica.quando_usar',
      'tecnica.material',
      'tecnica.tempo',
      'tecnica.tipo',
      'tecnica.status',
    ]);
    queryBuilder.orderBy('tecnica.id', 'ASC');
    return paginate<TecnicaEntity>(queryBuilder, options);
  }

  async findAllWithoutPage() {
    return await this.tecnicaRepository.find();
  }

  async findOneOrFail(options: FindOneOptions<TecnicaEntity>) {
    try {
      return await this.tecnicaRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(createTecnicaDto: CreateTecnicaDto) {
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

  async destroy(id: number) {
    await this.findOneOrFail({ where: { id } });
    this.tecnicaRepository.softDelete(id);
  }
}
