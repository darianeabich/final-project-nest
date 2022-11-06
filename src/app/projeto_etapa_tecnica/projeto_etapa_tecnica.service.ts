// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
// import { FindOneOptions, Repository } from 'typeorm';
// import { CreateProjetoEtapaTecnicaDto } from './dto/create-projeto_etapa_tecnica.dto';
// import { UpdateProjetoEtapaTecnicaDto } from './dto/update-projeto_etapa_tecnica.dto';
// import { ProjetoEtapaTecnicaEntity } from './entities/projeto_etapa_tecnica.entity';

// @Injectable()
// export class ProjetoEtapaTecnicaService {
//   constructor(
//     @InjectRepository(ProjetoEtapaTecnicaEntity)
//     private readonly petRepository: Repository<ProjetoEtapaTecnicaEntity>,
//   ) {}

//   findAll(options?: IPaginationOptions) {
//     const queryBuilder = this.petRepository.createQueryBuilder('pet');
//     queryBuilder.select(['pet.projetoId', 'pet.etapaId', 'pet.tecnicas']);
//     queryBuilder.orderBy('pet.projetoId', 'ASC');
//     return paginate<ProjetoEtapaTecnicaEntity>(queryBuilder, options);
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} projetoEtapaTecnica`;
//   }

//   async findOneOrFail(options: FindOneOptions<ProjetoEtapaTecnicaEntity>) {
//     try {
//       return await this.petRepository.findOneOrFail(options);
//     } catch (error) {
//       throw new NotFoundException(error.message);
//     }
//   }

//   async store(createProjetoEtapaTecnicaDto: CreateProjetoEtapaTecnicaDto) {
//     const projeto = new ProjetoEtapaTecnicaEntity();
//     projeto.projetoId = createProjetoEtapaTecnicaDto.projetoId;
//     projeto.etapaId = createProjetoEtapaTecnicaDto.etapaId;
//     projeto.tecnicaId = createProjetoEtapaTecnicaDto.tecnicaId;

//     // const projetoCriado = this.petRepository.create(
//     //   createProjetoEtapaTecnicaDto,
//     // );
//     return await this.petRepository.save(projeto);
//   }

//   async update(
//     id: number,
//     updateProjetoEtapaTecnicaDto: UpdateProjetoEtapaTecnicaDto,
//   ) {
//     const projetoEncontrado = await this.findOneOrFail({
//       where: { projetoId: id },
//     });

//     if (
//       projetoEncontrado.tecnicaId !== updateProjetoEtapaTecnicaDto.tecnicaId
//     ) {
//       projetoEncontrado.tecnicaId = updateProjetoEtapaTecnicaDto.tecnicaId;
//     }

//     return await this.petRepository.save(projetoEncontrado);
//   }

//   async destroy(id: number) {
//     await this.petRepository.findOneOrFail({ where: { projetoId: id } });
//     this.petRepository.softDelete({ projetoId: id });
//   }
// }
