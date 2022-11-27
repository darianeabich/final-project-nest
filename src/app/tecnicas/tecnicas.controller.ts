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
import { PaginationDto } from '../../common/dto/pagination.dto';

import { CreateTecnicaDto } from './dto/create-tecnica.dto';
import { UpdateTecnicaDto } from './dto/update-tecnica.dto';
import { TecnicasService } from './tecnicas.service';

@Controller('tecnicas')
export class TecnicasController {
  constructor(private readonly tecnicasService: TecnicasService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    console.log(paginationDto);
    return this.tecnicasService.findAll(paginationDto);
  }
  // async index(@Query('page') page = 1, @Query('limit') limit = 10) {
  //   limit = limit > 100 ? 100 : limit;
  //   return await this.tecnicasService.findAll({
  //     page,
  //     limit,
  //     route: 'http://localhost:3000/tecnicas',
  //   });
  // }

  // @Get('todas')
  // async findAll() {
  //   return await this.tecnicasService.findAllWithoutPage();
  // }

  @Get(':id')
  async show(@Param('id') id: number) {
    return await this.tecnicasService.findOneOrFail({ where: { id } });
  }

  @Post()
  async create(@Body() createTecnicaDto: CreateTecnicaDto) {
    return await this.tecnicasService.create(createTecnicaDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTecnicaDto: UpdateTecnicaDto,
  ) {
    return await this.tecnicasService.update(+id, updateTecnicaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.tecnicasService.remove(+id);
  }
}
