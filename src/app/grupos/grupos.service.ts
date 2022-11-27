import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDto } from './../../common/dto/pagination.dto';

import { CreateGrupoDto } from './dto/create-grupo.dto';
import { SearchGrupoDto } from './dto/search-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { GrupoEntity } from './entities/grupo.entity';

@Injectable()
export class GruposService {
  private readonly logger = new Logger(GruposService.name);

  constructor(
    @InjectRepository(GrupoEntity)
    private readonly grupoRepository: Repository<GrupoEntity>, // @InjectRepository(ProjetoEntity) // private readonly projetoRepository: Repository<ProjetoEntity>,
  ) {}

  async create(createGrupoDto: CreateGrupoDto) {
    try {
      const { projeto, ...grupoDetails } = createGrupoDto;

      const grupo = this.grupoRepository.create({
        ...grupoDetails,
        projeto: { id: projeto },
      });
      await this.grupoRepository.save(grupo);

      return grupo;
    } catch (error) {
      this.handleDBException(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const grupos = await this.grupoRepository.find({
      take: limit,
      skip: offset,
      relations: {
        projeto: true,
      },
    });

    return grupos.map((grupo) => ({
      ...grupo,
      projeto: grupo.projeto.id,
    }));
  }

  async findOneById(id: number) {
    const grupo = await this.grupoRepository.findOneBy({ id });

    if (!grupo) throw new NotFoundException(`Grupo #${id} not found`);

    return grupo;
  }

  async findOne(termo: SearchGrupoDto) {
    let grupo: GrupoEntity;

    if (termo.id) {
      grupo = await this.grupoRepository.findOneBy({ id: termo.id });
    } else if (termo.titulo) {
      const queryBuilder = this.grupoRepository.createQueryBuilder('grupo');

      grupo = await queryBuilder
        .select(['grupo.id', 'grupo.titulo', 'grupo.projeto'])
        .where('UPPER(titulo) =:titulo', {
          titulo: termo.titulo.toUpperCase(),
        })
        .leftJoinAndSelect('grupo.projeto', 'projeto')
        .getOne();
      // grupo = await this.grupoRepository.findOneBy({ titulo: termo.titulo });
    }

    if (!grupo) throw new NotFoundException(`Grupo with ${termo} not found`);

    return grupo;
  }

  async findOnePlain(termo: SearchGrupoDto) {
    const { projeto, ...rest } = await this.grupoRepository.findOneBy({
      titulo: termo.titulo,
    });

    return {
      ...rest,
      projeto: projeto.id,
    };
  }

  async update(id: number, updateGrupoDto: UpdateGrupoDto) {
    const grupo = await this.grupoRepository.preload({
      id: +id,
      ...updateGrupoDto,
      projeto: { id: updateGrupoDto.projeto },
    });

    if (!grupo) throw new NotFoundException(`Grupo with id #${id} not found`);

    await this.grupoRepository.save(grupo);

    return grupo;
  }

  async remove(id: number) {
    const grupo = await this.findOneById(id);
    await this.grupoRepository.remove(grupo);
  }

  private handleDBException(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
