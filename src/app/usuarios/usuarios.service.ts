import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { FindOneOptions, Like, Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuarios.dto';
import { UsuarioEntity } from './entities/usuarios.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuariosRepository: Repository<UsuarioEntity>,
  ) {}

  findAll(options: IPaginationOptions) {
    const queryBuilder = this.usuariosRepository.createQueryBuilder('user');

    queryBuilder.select([
      'user.id',
      'user.nome',
      'user.email',
      'user.cod_institucional',
      'user.perfil',
      'user.status',
    ]);
    queryBuilder.orderBy('user.id', 'ASC');
    return paginate<UsuarioEntity>(queryBuilder, options);
  }

  paginate(options: IPaginationOptions) {
    console.log(options);
    return from(paginate<UsuarioEntity>(this.usuariosRepository, options)).pipe(
      map((usersPageable: Pagination<UsuarioEntity>) => {
        usersPageable.items.forEach(function (v) {
          delete v.senha;
          return usersPageable;
        });
      }),
    );
  }

  paginateFilterByNome(options: IPaginationOptions, user: UsuarioEntity) {
    return from(
      this.usuariosRepository.findAndCount({
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
      return await this.usuariosRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async create(usuario: CreateUsuarioDto) {
    const usuarioCriado = this.usuariosRepository.create(usuario);
    return await this.usuariosRepository.save(usuarioCriado);
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

    this.usuariosRepository.merge(usuarioEncontrado, body);

    return await this.usuariosRepository.save(usuarioEncontrado);
  }

  async remove(id: number) {
    await this.usuariosRepository.findOneOrFail({ where: { id } });
    this.usuariosRepository.softDelete({ id });
  }
}
