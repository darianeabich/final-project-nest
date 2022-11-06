// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   HttpCode,
//   HttpStatus,
//   Param,
//   Post,
//   Put,
// } from '@nestjs/common';
// import { CreateProjetoEtapaTecnicaDto } from './dto/create-projeto_etapa_tecnica.dto';
// import { UpdateProjetoEtapaTecnicaDto } from './dto/update-projeto_etapa_tecnica.dto';
// import { ProjetoEtapaTecnicaService } from './projeto_etapa_tecnica.service';

// @Controller('projeto-etapa-tecnica')
// export class ProjetoEtapaTecnicaController {
//   constructor(
//     private readonly projetoEtapaTecnicaService: ProjetoEtapaTecnicaService,
//   ) {}

//   @Get()
//   async index() {
//     return this.projetoEtapaTecnicaService.findAll();
//   }

//   @Get(':id')
//   async findOne(@Param('id') id: number) {
//     return this.projetoEtapaTecnicaService.findOneOrFail({
//       where: { projetoId: id },
//     });
//   }

//   @Post()
//   async create(
//     @Body() createProjetoEtapaTecnicaDto: CreateProjetoEtapaTecnicaDto,
//   ) {
//     return this.projetoEtapaTecnicaService.store(createProjetoEtapaTecnicaDto);
//   }

//   @Put(':id')
//   async update(
//     @Param('id') id: number,
//     @Body() updateProjetoEtapaTecnicaDto: UpdateProjetoEtapaTecnicaDto,
//   ) {
//     return this.projetoEtapaTecnicaService.update(
//       +id,
//       updateProjetoEtapaTecnicaDto,
//     );
//   }

//   @Delete(':id')
//   @HttpCode(HttpStatus.NO_CONTENT)
//   async remove(@Param('id') id: number) {
//     return await this.projetoEtapaTecnicaService.destroy(id);
//   }
// }
