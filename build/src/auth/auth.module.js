'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.AuthModule = void 0;
/* eslint-disable prettier/prettier */
var usuarios_module_1 = require('./../app/usuarios/usuarios.module');
var config_1 = require('@nestjs/config');
var common_1 = require('@nestjs/common');
var auth_service_1 = require('./auth.service');
var passport_1 = require('@nestjs/passport');
var jwt_1 = require('@nestjs/jwt');
var auth_controller_1 = require('./auth.controller');
var local_strategy_1 = require('./strategies/local.strategy');
var jwt_strategy_service_1 = require('./strategies/jwt-strategy.service');
var AuthModule = /** @class */ (function () {
  function AuthModule() {}
  AuthModule = __decorate(
    [
      (0, common_1.Module)({
        imports: [
          config_1.ConfigModule.forRoot(),
          usuarios_module_1.UsuariosModule,
          passport_1.PassportModule,
          jwt_1.JwtModule.register({
            privateKey: process.env.JWT_SECRET_KEY,
            signOptions: { expiresIn: '6000s' },
          }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
          auth_service_1.AuthService,
          local_strategy_1.LocalStrategy,
          jwt_strategy_service_1.JwtStrategyService,
        ],
        exports: [
          auth_service_1.AuthService,
          jwt_1.JwtModule,
          passport_1.PassportModule,
        ],
      }),
    ],
    AuthModule,
  );
  return AuthModule;
})();
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map
