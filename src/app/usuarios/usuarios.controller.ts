/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { NestResponse } from './../../core/http/nest-response';
import { NestResponseBuilder } from './../../core/http/nest-response-builder';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuarios.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
@UseGuards(AuthGuard('jwt'))
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  
  @Get()
  async index(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    // @Query('nome') nome: string,
  ) {
    limit = limit > 100 ? 100 : limit;
    // console.log('nome => ', nome);
    return this.usuariosService.findAll({ page, limit, route: 'http://localhost:3000/usuarios' });
  }

  // @Role('admin')
  @Post()
  async store(@Body() body: CreateUsuarioDto): Promise<NestResponse> {
    const usuarioCriado = await this.usuariosService.store(body);
    return new NestResponseBuilder()
      .comStatus(HttpStatus.CREATED)
      .comHeaders({
        'Location': `/usuarios/${usuarioCriado.id}`
      })
      .comBody(usuarioCriado)
      .build();
  }

  @Get(':id')
  async show(@Param('id') id: number) {
    return await this.usuariosService.findOneOrFail({ where: { id } });
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: UpdateUsuarioDto) {
    return await this.usuariosService.update(id, body);
  }

  // @Role('admin')
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: number) {
    return await this.usuariosService.destroy(id);
  }
}
