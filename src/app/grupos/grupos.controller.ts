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
import { PaginationDto } from './../../common/dto/pagination.dto';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { SearchGrupoDto } from './dto/search-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { GruposService } from './grupos.service';

@Controller('grupos')
export class GruposController {
  constructor(private readonly gruposService: GruposService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    console.log(paginationDto);
    return this.gruposService.findAll(paginationDto);
  }

  @Get(':id')
  findGrupoById(@Param('id', ParseIntPipe) id: number) {
    return this.gruposService.findOneById(+id);
  }

  @Get('search')
  findGrupobyTerm(@Body() termo: SearchGrupoDto) {
    return this.gruposService.findOnePlain(termo);
  }

  @Post()
  create(@Body() createGrupoDto: CreateGrupoDto) {
    return this.gruposService.create(createGrupoDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGrupoDto: UpdateGrupoDto,
  ) {
    return this.gruposService.update(+id, updateGrupoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.gruposService.remove(+id);
  }
}
