/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateParticipacaoDto } from './dto/create-participacao.dto';
import { UpdateParticipacaoDto } from './dto/update-participacao.dto';
import { Participacao } from './entities/participacao.entity';

@Injectable()
export class ParticipacaoService {
  private readonly logger = new Logger(ParticipacaoService.name);

  constructor(
    @InjectRepository(Participacao)
    private readonly participacaoRepository: Repository<Participacao>, // private readonly usuariosService: UsuariosService,
  ) {}

  async create(createParticipacaoDto: CreateParticipacaoDto) {
    const participacao = await this.participacaoRepository
      .createQueryBuilder()
      .insert()
      .into(Participacao)
      .values({
        usuariosId: createParticipacaoDto.usuariosId,
        projetosId: createParticipacaoDto.projetosId,
        fl_aceito: createParticipacaoDto.fl_aceito,
      })
      .execute();

    return participacao;
    // try {
    //   const { projetosId, usuariosId, fl_aceito } = createParticipacaoDto;

    //   const participacao = this.participacaoRepository.create({
    //     projetosId,
    //     usuariosId,
    //     fl_aceito,
    //   });

    //   await this.participacaoRepository.save(participacao);

    //   return participacao;
    // } catch (error) {
    //   this.handleDBException(error);
    // }

    // const id = createParticipacaoDto.usuariosId;
    // const usuario = this.usuariosService.findOneOrFail({
    //   where: { id },
    // });

    // let perfil;

    // usuario.then((usuario) => {
    //   perfil = usuario.perfil;
    // });

    // if (perfil !== Roles.PARTICIPANTE) {
    //   throw new Error(
    //     `Para participar de um projeto, o usuário deve ser: ${Roles.PARTICIPANTE}`,
    //   );
    // }

    // return await this.participacaoRepository.save(createParticipacaoDto);
  }

  findAll() {
    const queryBuilder =
      this.participacaoRepository.createQueryBuilder('participacap');
    queryBuilder.select([
      'participacao.ususariosId',
      'participacao.projetosId',
      'participacao.fl_aceito',
    ]);
    queryBuilder.orderBy('participacao.projetosId', 'ASC');
    return queryBuilder;
  }

  findOne(id: number) {
    return `This action returns a #${id} participacao`;
  }

  async findOneParticipacao(user: number, project: number) {
    const queryBuilder =
      this.participacaoRepository.createQueryBuilder('participacao');
    queryBuilder.select([
      'participacao.ususariosId',
      'participacao.projetosId',
      'participacao.fl_aceito',
    ]);
    queryBuilder.where('participacao.usuariosId = :usuariosId', { user });
    queryBuilder.andWhere('participacao.projetosId = :projetosId', { project });
    return await queryBuilder;
  }

  async findParticipacaoByUser(user: number) {
    const encontrado = await this.participacaoRepository.find({
      where: { usuariosId: user },
    });

    if (encontrado) {
      return encontrado;
    } else {
      throw new NotFoundException('Participação não encontrada');
    }
  }

  async findParticipacaoByProject(project: number) {
    const encontrado = await this.participacaoRepository.find({
      where: { projetosId: project },
    });

    if (encontrado) {
      return encontrado;
    } else {
      throw new NotFoundException('Participação não encontrada');
    }
  }

  async findOneOrFail(options: FindOneOptions<Participacao>) {
    try {
      return await this.participacaoRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    projetosId: number,
    usuariosId: number,
    updateParticipacaoDto: UpdateParticipacaoDto,
  ) {
    // const projetos = await this.findOneOrFail({ where: { projetosId } });
    // const usuarios = await this.findOneOrFail({ where: { usuariosId } });

    const queryBuilder =
      this.participacaoRepository.createQueryBuilder('participacao');

    queryBuilder
      .select([
        'participacao.usuariosId',
        'participacao.projetosId',
        'participacao.fl_aceito',
      ])
      .where('participacao.usuariosId = :usuariosId', { usuariosId })
      .andWhere('participacao.projetosId = :projetosId', { projetosId })
      .getOne();

    queryBuilder
      .update({ fl_aceito: updateParticipacaoDto.fl_aceito })
      .execute();

    if (queryBuilder) {
      return await this.participacaoRepository.save({
        projetosId,
        usuariosId,
        updateParticipacaoDto,
      });
    } else {
      throw new NotFoundException('Participação não encontrada');
    }
  }

  remove(id: number) {
    return `This action removes a #${id} participacao`;
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
