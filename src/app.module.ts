/* eslint-disable prettier/prettier */
import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsuariosModule } from './app/usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { EtapasModule } from './app/etapas/etapas.module';
import { TecnicasModule } from './app/tecnicas/tecnicas.module';
import { TematicasModule } from './app/tematicas/tematicas.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FiltroDeExcecaoHttp } from './common/filtros/filtro-de-excecao-http.filter';
import { TransfomaInterceptor } from './core/http/transforma-resposta.interceptor';
import { ProjetosModule } from './app/projetos/projetos.module';
import { GruposModule } from './app/grupos/grupos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_CONNECTION,
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      migrationsTableName: 'custom_migration_table',
      synchronize: true,
    } as TypeOrmModuleOptions),
    UsuariosModule,
    AuthModule,
    EtapasModule,
    TecnicasModule,
    TematicasModule,
    ProjetosModule,
    GruposModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FiltroDeExcecaoHttp
    },
    {
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor,
    },
    {
        provide: APP_INTERCEPTOR,
        useClass: TransfomaInterceptor,
    }
  ],
})
export class AppModule {}
