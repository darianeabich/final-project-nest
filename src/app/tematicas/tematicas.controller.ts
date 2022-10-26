/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { TematicasService } from './tematicas.service';
import { CreateTematicaDto } from './dto/create-tematica.dto';
import { UpdateTematicaDto } from './dto/update-tematica.dto';

@Controller('tematicas')
export class TematicasController {
  constructor(private readonly tematicasService: TematicasService) {}

  @Get()
  async index(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ) {
    limit = limit > 100 ? 100 : limit;
    return this.tematicasService.findAll({ page, limit, route: 'http://localhost:3000/tematicas' });
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.tematicasService.findOneOrFail({ where: {id} });
  }

  @Post()
  async create(@Body() createTematicaDto: CreateTematicaDto) {
    return this.tematicasService.store(createTematicaDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateTematicaDto: UpdateTematicaDto) {
    return this.tematicasService.update(+id, updateTematicaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.tematicasService.destroy(+id);
  }
}
