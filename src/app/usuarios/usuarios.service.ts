import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { from, map } from 'rxjs';
import { FindOneOptions, Like, Repository } from 'typeorm';
import { AuthService } from '../../auth/auth.service';
import { PaginationDto } from './../../common/dto/pagination.dto';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuarios.dto';
import { UsuarioEntity } from './entities/usuarios.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,

    private readonly authService: AuthService,
  ) {}

  async findAll(paginaitionDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginaitionDto;

    const usuarios = await this.usuarioRepository.find({
      take: limit,
      skip: offset,
      relations: {
        projeto: true,
      },
    });

    return usuarios.map((usuario) => ({
      ...usuario,
      projeto: usuario.projeto.map((projeto) => projeto.id),
    }));
  }

  paginateFilterByNome(options: IPaginationOptions, user: UsuarioEntity) {
    return from(
      this.usuarioRepository.findAndCount({
        skip: Number(options.page) * Number(options.limit) || 0,
        take: Number(options.limit) || 10,
        order: { id: 'ASC' },
        select: [
          'id',
          'nome',
          'email',
          'cod_institucional',
          'perfil',
          'status',
        ],

        where: { nome: Like(`%${user.nome}%`) },
      }),
    ).pipe(
      map(([users, total]) => {
        const userPageable: Pagination<UsuarioEntity> = {
          items: users,

          links: {
            first: options.route + `?limit=${options.limit}`,
            previous: options.route + ``,
            next:
              options.route +
              `?limit=${options.limit}&page=${Number(options.page) + 1}`,
            last:
              options.route +
              `?limit=${options.limit}&page=${Math.ceil(
                total / Number(options.limit),
              )}`,
          },

          meta: {
            currentPage: Number(options.page),
            itemCount: users.length,
            itemsPerPage: Number(options.limit),
            totalItems: total,
            totalPages: Math.ceil(total / Number(options.limit)),
          },
        };

        return userPageable;
      }),
    );
  }

  async findOneOrFail(options: FindOneOptions<UsuarioEntity>) {
    try {
      return await this.usuarioRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  findOne(id: number) {
    const queryBuilder = this.usuarioRepository.createQueryBuilder('usuario');
    queryBuilder
      .select([
        'usuario.id',
        'usuario.nome',
        'usuario.email',
        'usuario.cod_institucional',
        'usuario.perfil',
        'usuario.status',
        'usuario.projeto',
      ])
      .leftJoinAndSelect('usuario.projeto', 'projeto')
      .where('usuario.id = :id', { id });

    return queryBuilder;
  }

  async create(usuario: CreateUsuarioDto) {
    try {
      const usuarioCriado = this.usuarioRepository.create(usuario);

      await this.usuarioRepository.save(usuarioCriado);

      delete usuarioCriado.senha;

      return {
        ...usuarioCriado,
        token: this.authService.getJwtToken({
          id: usuarioCriado.id,
          perfil: usuarioCriado.perfil,
          nome: usuarioCriado.nome,
        }),
      };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async update(id: number, body: UpdateUsuarioDto) {
    const usuarioEncontrado = await this.findOneOrFail({
      where: { id },
    });

    if (usuarioEncontrado.nome !== body.nome) {
      usuarioEncontrado.nome = body.nome;
    }

    if (usuarioEncontrado.email !== body.email) {
      usuarioEncontrado.email = body.email;
    }

    if (usuarioEncontrado.cod_institucional !== body.cod_institucional) {
      usuarioEncontrado.cod_institucional = body.cod_institucional;
    }

    this.usuarioRepository.merge(usuarioEncontrado, body);

    return await this.usuarioRepository.save(usuarioEncontrado);
  }

  async remove(id: number) {
    await this.usuarioRepository.findOneOrFail({ where: { id } });

    this.usuarioRepository.softDelete({ id });
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    console.log(error);

    throw new InternalServerErrorException('Please check server logs');
  }
}
