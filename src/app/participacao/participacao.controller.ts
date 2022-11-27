import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ParticipacaoService } from './participacao.service';

import { CreateParticipacaoDto } from './dto/create-participacao.dto';

import { UpdateParticipacaoDto } from './dto/update-participacao.dto';

@Controller('participacao')
export class ParticipacaoController {
  constructor(private readonly participacaoService: ParticipacaoService) {}

  @Get()
  findAll() {
    return this.participacaoService.findAll();
  }

  @Get('projeto:projetoId/usuario:usuarioId')
  findOneParticipacao(
    @Param('projetoId') projetoId: number,
    @Param('usuarioId') usuarioId: number,
  ) {
    return this.participacaoService.findOneParticipacao(usuarioId, projetoId);
  }

  @Get('usuarioId:usuarioId')
  findAllProjects(@Param('usuarioId') usuarioId: number) {
    return this.participacaoService.findParticipacaoByUser(usuarioId);
  }

  @Get('projeto:projetoId')
  findAllUsers(@Param('projetoId') projetoId: number) {
    return this.participacaoService.findParticipacaoByProject(projetoId);
  }

  @Post()
  create(@Body() createParticipacaoDto: CreateParticipacaoDto) {
    return this.participacaoService.create(createParticipacaoDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() idUsuario: number,
    @Body() updateParticipacaoDto: UpdateParticipacaoDto,
  ) {
    return this.participacaoService.update(
      id,
      idUsuario,
      updateParticipacaoDto,
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: number) {
    return this.participacaoService.remove(+id);
  }
}
