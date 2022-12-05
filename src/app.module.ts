import { TypeOrmModuleOptions } from '@nestjs/typeorm';
/* eslint-disable prettier/prettier */
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EtapasModule } from './app/etapas/etapas.module';
import { GruposModule } from './app/grupos/grupos.module';
import { ProjetosModule } from './app/projetos/projetos.module';
// import { ProjetoEtapaTecnicaModule } from './app/projeto_etapa_tecnica/projeto_etapa_tecnica.module';
import { ParticipacaoModule } from './app/participacao/participacao.module';
import { PetModule } from './app/pet/pet.module';
import { TecnicasModule } from './app/tecnicas/tecnicas.module';
import { TematicasModule } from './app/tematicas/tematicas.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { FiltroDeExcecaoHttp } from './common/filtros/filtro-de-excecao-http.filter';
import { TransfomaInterceptor } from './core/http/transforma-resposta.interceptor';
import { UsuariosModule } from './app/usuarios/usuarios.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB_NAME,
      synchronize: true,
      logging: false,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + './src/migration/*{.ts,.js}'],
      migrationsTableName: 'migration',
    } as TypeOrmModuleOptions),
    // synchronize: true,),

    AuthModule,
    EtapasModule,
    TecnicasModule,
    TematicasModule,
    ProjetosModule,
    GruposModule,
    PetModule,
    ParticipacaoModule,
    CommonModule,
    UsuariosModule,
    // ProjetoEtapaTecnicaModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FiltroDeExcecaoHttp,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransfomaInterceptor,
    },
  ],
})
export class AppModule {}
