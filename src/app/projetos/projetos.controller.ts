import { HttpStatus } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { ProjetosService } from './projetos.service';

@Controller('projetos')
export class ProjetosController {
  constructor(private readonly projetosService: ProjetosService) {}

  @Get()
  async index(@Query('page') page = 1, @Query('limit') limit = 10) {
    limit = limit > 100 ? 100 : limit;
    return this.projetosService.findAll({
      page,
      limit,
      route: 'http://localhost:3000/projetos',
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.projetosService.findOneOrFail({ where: { id } });
  }

  @Post()
  async create(@Body() createProjetoDto: CreateProjetoDto) {
    return this.projetosService.store(createProjetoDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateProjetoDto: UpdateProjetoDto,
  ) {
    return this.projetosService.update(+id, updateProjetoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number) {
    return this.projetosService.destroy(+id);
  }
}
