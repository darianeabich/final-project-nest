import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateParticipacaoDto } from './dto/create-participacao.dto';
import { UpdateParticipacaoDto } from './dto/update-participacao.dto';
import { Participacao } from './entities/participacao.entity';

@Injectable()
export class ParticipacaoService {
  constructor(
    @InjectRepository(Participacao)
    private readonly participacaoRepository: Repository<Participacao>, // private readonly usuariosService: AuthService,
  ) {}

  async create(createParticipacaoDto: CreateParticipacaoDto) {
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

    return await this.participacaoRepository.save(createParticipacaoDto);
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
        'participacao.ususariosId',
        'participacao.projetosId',
        'participacao.fl_aceito',
      ])
      .where('participacao.usuariosId = :usuariosId', { usuariosId })
      .andWhere('participacao.projetosId = :projetosId', { projetosId })
      .getOne();

    queryBuilder.update(UpdateParticipacaoDto).execute();

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
}
