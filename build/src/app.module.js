"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var data_source_1 = require("./data-source");
/* eslint-disable prettier/prettier */
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var core_1 = require("@nestjs/core");
var typeorm_1 = require("@nestjs/typeorm");
var etapas_module_1 = require("./app/etapas/etapas.module");
var grupos_module_1 = require("./app/grupos/grupos.module");
var projetos_module_1 = require("./app/projetos/projetos.module");
var tecnicas_module_1 = require("./app/tecnicas/tecnicas.module");
var tematicas_module_1 = require("./app/tematicas/tematicas.module");
var usuarios_module_1 = require("./app/usuarios/usuarios.module");
var auth_module_1 = require("./auth/auth.module");
var filtro_de_excecao_http_filter_1 = require("./common/filtros/filtro-de-excecao-http.filter");
var transforma_resposta_interceptor_1 = require("./core/http/transforma-resposta.interceptor");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot(),
                typeorm_1.TypeOrmModule.forRoot({
                    AppDataSource: data_source_1.AppDataSource,
                }),
                usuarios_module_1.UsuariosModule,
                auth_module_1.AuthModule,
                etapas_module_1.EtapasModule,
                tecnicas_module_1.TecnicasModule,
                tematicas_module_1.TematicasModule,
                projetos_module_1.ProjetosModule,
                grupos_module_1.GruposModule,
            ],
            controllers: [],
            providers: [
                {
                    provide: core_1.APP_FILTER,
                    useClass: filtro_de_excecao_http_filter_1.FiltroDeExcecaoHttp,
                },
                {
                    provide: core_1.APP_INTERCEPTOR,
                    useClass: common_1.ClassSerializerInterceptor,
                },
                {
                    provide: core_1.APP_INTERCEPTOR,
                    useClass: transforma_resposta_interceptor_1.TransfomaInterceptor,
                },
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map