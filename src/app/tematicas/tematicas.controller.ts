/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTematicaDto } from './dto/create-tematica.dto';
import { UpdateTematicaDto } from './dto/update-tematica.dto';
import { TematicasService } from './tematicas.service';

@Controller('tematicas')
export class TematicasController {
  constructor(private readonly tematicasService: TematicasService) {}

  @Get()
  async index(@Query('page') page = 1, @Query('limit') limit = 10) {
    limit = limit > 100 ? 100 : limit;
    return this.tematicasService.findAll({
      page,
      limit,
      route: 'http://localhost:3000/tematicas',
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.tematicasService.findOneOrFail({ where: { id } });
  }

  @Post()
  async create(@Body() createTematicaDto: CreateTematicaDto) {
    return this.tematicasService.create(createTematicaDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTematicaDto: UpdateTematicaDto,
  ) {
    return this.tematicasService.update(+id, updateTematicaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.tematicasService.remove(+id);
  }
}
