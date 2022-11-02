import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjetoEtapaTecnicaService } from './projeto_etapa_tecnica.service';
import { CreateProjetoEtapaTecnicaDto } from './dto/create-projeto_etapa_tecnica.dto';
import { UpdateProjetoEtapaTecnicaDto } from './dto/update-projeto_etapa_tecnica.dto';

@Controller('projeto-etapa-tecnica')
export class ProjetoEtapaTecnicaController {
  constructor(private readonly projetoEtapaTecnicaService: ProjetoEtapaTecnicaService) {}

  @Post()
  create(@Body() createProjetoEtapaTecnicaDto: CreateProjetoEtapaTecnicaDto) {
    return this.projetoEtapaTecnicaService.create(createProjetoEtapaTecnicaDto);
  }

  @Get()
  findAll() {
    return this.projetoEtapaTecnicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projetoEtapaTecnicaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjetoEtapaTecnicaDto: UpdateProjetoEtapaTecnicaDto) {
    return this.projetoEtapaTecnicaService.update(+id, updateProjetoEtapaTecnicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projetoEtapaTecnicaService.remove(+id);
  }
}
