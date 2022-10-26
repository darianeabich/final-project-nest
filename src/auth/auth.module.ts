/* eslint-disable prettier/prettier */
import { UsuariosModule } from './../app/usuarios/usuarios.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategyService } from './strategies/jwt-strategy.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsuariosModule,
    PassportModule,
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '60s' },
    })
  ],
  controllers: [AuthController ],
  providers: [AuthService, LocalStrategy, JwtStrategyService],
  exports: [AuthService, JwtModule, PassportModule]
})
export class AuthModule {}
