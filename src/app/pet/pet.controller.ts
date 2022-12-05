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
import { PaginationDto } from '../../common/dto/pagination.dto';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.petService.findAll(paginationDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.petService.findOneOrFail({ where: { id } });
  }

  @Post()
  async create(@Body() createPetDto: CreatePetDto) {
    return await this.petService.create(createPetDto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePetDto: UpdatePetDto,
  ) {
    return await this.petService.update(+id, updatePetDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.petService.remove(+id);
  }

  @Get('projeto/:id')
  async findForProjects(@Param('id') id: number) {
    return await this.petService.findForProjects({ where: { projeto: id } });
  }

  @Get('projeto')
  async findForProjectsAll() {
    return await this.petService.findAllWithoutPage();
  }
}
