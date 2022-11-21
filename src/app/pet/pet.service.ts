import { Injectable, NotFoundException } from '@nestjs/common';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';

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

  async findAll(options: IPaginationOptions) {
    const queryBuilder = this.petRepository.createQueryBuilder('pet');

    queryBuilder.select(['pet.id', 'pet.projeto', 'pet.etapa', 'pet.tecnicas']);
    queryBuilder.orderBy('pet.id', 'ASC');

    return paginate<PetEntity>(queryBuilder, options);
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

  async store(createPetDto: CreatePetDto) {
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

  async destroy(id: number) {
    await this.petRepository.findOneOrFail({ where: { id } });
    this.petRepository.softDelete({ id });
  }

  async findForProjects(options: FindOneOptions<PetEntity>) {
    const projeto = this.petRepository.find(options);
    return await projeto;
  }
}
