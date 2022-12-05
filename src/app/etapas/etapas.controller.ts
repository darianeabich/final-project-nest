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

import { CreateEtapaDto } from '../../app/etapas/dto/create-etapa.dto';
import { UpdateEtapaDto } from '../../app/etapas/dto/update-etapa.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { EtapasService } from './etapas.service';

/* eslint-disable prettier/prettier */
@Controller('etapas')
export class EtapasController {
  constructor(private readonly etapasService: EtapasService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.etapasService.findAll(paginationDto);
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id: number) {
    return this.etapasService.findOneOrFail({ where: { id } });
  }

  // @Role('admin')
  @Post()
  // @Auth(ValidPerfis.ADMINISTRADOR)
  async create(@Body() createEtapaDto: CreateEtapaDto) {
    return this.etapasService.create(createEtapaDto);
  }

  // @Role('admin')
  @Patch(':id')
  // @Auth(ValidPerfis.ADMINISTRADOR)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEtapaDto: UpdateEtapaDto,
  ) {
    return this.etapasService.update(+id, updateEtapaDto);
  }

  // @Role('admin')
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  // @Auth(ValidPerfis.ADMINISTRADOR)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.etapasService.remove(id);
  }
}
