"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjetosModule = void 0;
var common_1 = require("@nestjs/common");
var projetos_service_1 = require("./projetos.service");
var projetos_controller_1 = require("./projetos.controller");
var projeto_entity_1 = require("./entities/projeto.entity");
var typeorm_1 = require("@nestjs/typeorm");
var ProjetosModule = /** @class */ (function () {
    function ProjetosModule() {
    }
    ProjetosModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([projeto_entity_1.ProjetoEntity])],
            controllers: [projetos_controller_1.ProjetosController],
            providers: [projetos_service_1.ProjetosService],
            exports: [projetos_service_1.ProjetosService],
        })
    ], ProjetosModule);
    return ProjetosModule;
}());
exports.ProjetosModule = ProjetosModule;
//# sourceMappingURL=projetos.module.js.map