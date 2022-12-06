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
} from '@nestjs/common';
import { CreateParticipacaoDto } from './dto/create-participacao.dto';
import { UpdateParticipacaoDto } from './dto/update-participacao.dto';
import { ParticipacaoService } from './participacao.service';

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

  @Get('usuario/:usuarioId')
  findAllProjects(@Param('usuarioId', ParseIntPipe) usuarioId: number) {
    return this.participacaoService.findParticipacaoByUser(usuarioId);
  }

  @Get('projeto/:projetoId')
  findAllUsers(@Param('projetoId', ParseIntPipe) projetoId: number) {
    return this.participacaoService.findParticipacaoByProject(projetoId);
  }

  @Post()
  create(@Body() createParticipacaoDto: CreateParticipacaoDto) {
    return this.participacaoService.create(createParticipacaoDto);
  }

  @Patch(':idProjeto/:idUsuario')
  update(
    @Param('idProjeto', ParseIntPipe) idProjeto: number,
    @Param('idUsuario', ParseIntPipe) idUsuario: number,
    @Body() updateParticipacaoDto: UpdateParticipacaoDto,
  ) {
    return this.participacaoService.update(
      idProjeto,
      idUsuario,
      updateParticipacaoDto,
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.participacaoService.remove(+id);
  }
}
