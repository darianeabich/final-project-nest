import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { CreateEtapaDto } from '../../app/etapas/dto/create-etapa.dto';
import { UpdateEtapaDto } from '../../app/etapas/dto/update-etapa.dto';
import { EtapasService } from './etapas.service';

/* eslint-disable prettier/prettier */
@Controller('etapas')
export class EtapasController {
  constructor(private readonly etapasService: EtapasService) {}

  @Get()
  async index(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.etapasService.findAll({ page, limit, route: 'http://localhost:3000/etapas' });
  }

  @Get(':id')
  async show(@Param('id') id: number) {
    return this.etapasService.findOneOrFail({where: { id } });
  }

  // @Role('admin')
  @Post()
  async store(@Body() createEtapaDto: CreateEtapaDto) {
    return this.etapasService.store(createEtapaDto);
  }

  // @Role('admin')
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateEtapaDto: UpdateEtapaDto) {
    return this.etapasService.update(+id, updateEtapaDto);
  }

  // @Role('admin')
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: number) {
    return await this.etapasService.destroy(id);
  }
}
