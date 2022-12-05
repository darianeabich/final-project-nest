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

import { CreateTecnicaDto } from './dto/create-tecnica.dto';
import { UpdateTecnicaDto } from './dto/update-tecnica.dto';
import { TecnicasService } from './tecnicas.service';

@Controller('tecnicas')
// @Auth()
export class TecnicasController {
  constructor(private readonly tecnicasService: TecnicasService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    console.log(paginationDto);
    return this.tecnicasService.findAll(paginationDto);
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id: number) {
    return await this.tecnicasService.findOneById(id);
  }

  @Post()
  async create(@Body() createTecnicaDto: CreateTecnicaDto) {
    return await this.tecnicasService.create(createTecnicaDto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTecnicaDto: UpdateTecnicaDto,
  ) {
    return await this.tecnicasService.update(+id, updateTecnicaDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.tecnicasService.remove(+id);
  }
}
