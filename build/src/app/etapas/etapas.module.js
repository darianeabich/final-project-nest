"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtapasModule = void 0;
var etapa_entity_1 = require("./entities/etapa.entity");
var typeorm_1 = require("@nestjs/typeorm");
var common_1 = require("@nestjs/common");
var etapas_service_1 = require("./etapas.service");
var etapas_controller_1 = require("./etapas.controller");
var EtapasModule = /** @class */ (function () {
    function EtapasModule() {
    }
    EtapasModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([etapa_entity_1.EtapaEntity])],
            controllers: [etapas_controller_1.EtapasController],
            providers: [etapas_service_1.EtapasService],
            exports: [etapas_service_1.EtapasService],
        })
    ], EtapasModule);
    return EtapasModule;
}());
exports.EtapasModule = EtapasModule;
//# sourceMappingURL=etapas.module.js.map