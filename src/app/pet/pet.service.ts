import { Injectable, NotFoundException } from '@nestjs/common';
import { PaginationDto } from './../../common/dto/pagination.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetEntity } from './entities/pet.entity';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(PetEntity)
    private readonly petRepository: Repository<PetEntity>,
  ) {}

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const pets = await this.petRepository.find({
      take: limit,
      skip: offset,
      relations: {
        projeto: true,
        etapa: true,
        tecnicas: true,
      },
    });

    return pets.map((pet) => ({
      ...pet,
      projeto: pet.projeto,
      etapa: pet.etapa,
      tecnicas: pet.tecnicas.map((tec) => tec.id),
    }));
  }

  findOne(id: number) {
    return `This action returns a #${id} projeto`;
  }

  async findOneOrFail(options: FindOneOptions<PetEntity>) {
    try {
      return await this.petRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findAllWithoutPage() {
    const projetos = this.petRepository.find({
      relations: {
        projeto: true,
        etapa: true,
        tecnicas: true,
      },
    });
    return await projetos;
  }

  async create(createPetDto: CreatePetDto) {
    const petCriado = this.petRepository.create(createPetDto);
    return await this.petRepository.save(petCriado);
  }

  async update(id: number, updatePetDto: UpdatePetDto) {
    const petEncontrado = await this.findOneOrFail({
      where: { id },
    });

    petEncontrado.tecnicas = null;
    updatePetDto.tecnicas.forEach((tec) => {
      petEncontrado.tecnicas.push(tec);
    });

    this.petRepository.merge(petEncontrado, updatePetDto);

    return await this.petRepository.save(petEncontrado);
  }

  async remove(id: number) {
    await this.petRepository.findOneOrFail({ where: { id } });
    this.petRepository.softDelete({ id });
  }

  async findForProjects(options: FindOneOptions<PetEntity>) {
    const projeto = this.petRepository.find(options);
    return await projeto;
  }
}
