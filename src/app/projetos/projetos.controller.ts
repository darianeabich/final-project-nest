import { HttpStatus } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { ProjetosService } from './projetos.service';

@Controller('projetos')
export class ProjetosController {
  constructor(private readonly projetosService: ProjetosService) {}

  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.projetosService.findAll(paginationDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.projetosService.findOneOrFail({ where: { id } });
  }

  @Get('owner/:id')
  async findByUser(@Param('id', ParseIntPipe) id: number) {
    return this.projetosService.findByUser(id);
  }

  @Post()
  // @Auth(ValidPerfis.ADMINISTRADOR, ValidPerfis.FACILITADOR)
  async create(@Body() createProjetoDto: CreateProjetoDto) {
    return this.projetosService.create(createProjetoDto);
  }

  @Patch(':id')
  // @Auth(ValidPerfis.ADMINISTRADOR, ValidPerfis.FACILITADOR)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProjetoDto: UpdateProjetoDto,
  ) {
    return this.projetosService.update(+id, updateProjetoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  // @Auth(ValidPerfis.ADMINISTRADOR, ValidPerfis.FACILITADOR)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.projetosService.remove(+id);
  }
}
