/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { CreateTematicaDto } from './dto/create-tematica.dto';
import { UpdateTematicaDto } from './dto/update-tematica.dto';
import { TematicasService } from './tematicas.service';

@Controller('tematicas')
// @Auth()
export class TematicasController {
  constructor(private readonly tematicasService: TematicasService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.tematicasService.findAll(paginationDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tematicasService.findOneOrFail({ where: { id } });
  }

  @Post()
  async create(@Body() createTematicaDto: CreateTematicaDto) {
    return this.tematicasService.create(createTematicaDto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTematicaDto: UpdateTematicaDto,
  ) {
    return this.tematicasService.update(+id, updateTematicaDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.tematicasService.remove(+id);
  }
}
