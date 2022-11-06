"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TematicasModule = void 0;
var common_1 = require("@nestjs/common");
var tematicas_service_1 = require("./tematicas.service");
var tematicas_controller_1 = require("./tematicas.controller");
var tematica_entity_1 = require("./entities/tematica.entity");
var typeorm_1 = require("@nestjs/typeorm");
var TematicasModule = /** @class */ (function () {
    function TematicasModule() {
    }
    TematicasModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([tematica_entity_1.TematicaEntity])],
            controllers: [tematicas_controller_1.TematicasController],
            providers: [tematicas_service_1.TematicasService],
        })
    ], TematicasModule);
    return TematicasModule;
}());
exports.TematicasModule = TematicasModule;
//# sourceMappingURL=tematicas.module.js.map