import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PaginationDto } from './../../common/dto/pagination.dto';
import { NestResponse } from './../../core/http/nest-response';
import { NestResponseBuilder } from './../../core/http/nest-response-builder';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuarios.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get('')
  findAll(@Query() paginationDto: PaginationDto) {
    return this.usuariosService.findAll(paginationDto);
  }
  // @Role('admin')
  // @Header('Access-Control-Allow-Origin', '*')
  @Post('')
  async create(@Body() body: CreateUsuarioDto): Promise<NestResponse> {
    const usuarioCriado = await this.usuariosService.create(body);

    return new NestResponseBuilder()
      .comStatus(HttpStatus.CREATED)
      .comHeaders({
        Location: `/usuarios/${usuarioCriado.id}`,
      })
      .comBody(usuarioCriado)
      .build();
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id: number) {
    return await this.usuariosService.findOneOrFail({ where: { id } });
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUsuarioDto,
  ) {
    return await this.usuariosService.update(id, body);
  }

  // @Role('admin')
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.usuariosService.remove(id);
  }
}
