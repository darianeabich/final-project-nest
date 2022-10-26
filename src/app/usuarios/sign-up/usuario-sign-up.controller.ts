/* eslint-disable prettier/prettier */
import { Body, Controller, HttpStatus, Post, UseGuards } from '@nestjs/common';

import { NestResponse } from '../../../core/http/nest-response';
import { NestResponseBuilder } from '../../../core/http/nest-response-builder';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UsuariosService } from '../usuarios.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('sign-up')
export class UsuariosSignUpController {
  constructor(private readonly usuariosService: UsuariosService) {}
  
  // @UseGuards(AuthGuard('local'))
  @Post()
  async store(@Body() body: CreateUsuarioDto): Promise<NestResponse> {
    const usuarioCriado = await this.usuariosService.store(body);
    return new NestResponseBuilder()
      .comStatus(HttpStatus.CREATED)
      .comHeaders({
        'Location': `/usuarios/${usuarioCriado.id}`
      })
      .comBody(usuarioCriado)
      .build();
  }

}
