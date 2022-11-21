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
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  async index(@Query('page') page = 1, @Query('limit') limit = 10) {
    limit = limit > 100 ? 100 : limit;
    return await this.petService.findAll({
      page,
      limit,
      route: 'http://localhost:3000/pet',
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.petService.findOneOrFail({ where: { id } });
  }

  @Post()
  async create(@Body() createPetDto: CreatePetDto) {
    return await this.petService.store(createPetDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatePetDto: UpdatePetDto) {
    return await this.petService.update(+id, updatePetDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number) {
    return await this.petService.destroy(+id);
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
