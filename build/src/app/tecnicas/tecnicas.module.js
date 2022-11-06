"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TecnicasModule = void 0;
var common_1 = require("@nestjs/common");
var tecnicas_service_1 = require("./tecnicas.service");
var tecnicas_controller_1 = require("./tecnicas.controller");
var tecnica_entity_1 = require("./entities/tecnica.entity");
var typeorm_1 = require("@nestjs/typeorm");
var TecnicasModule = /** @class */ (function () {
    function TecnicasModule() {
    }
    TecnicasModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([tecnica_entity_1.TecnicaEntity])],
            controllers: [tecnicas_controller_1.TecnicasController],
            providers: [tecnicas_service_1.TecnicasService],
            exports: [tecnicas_service_1.TecnicasService],
        })
    ], TecnicasModule);
    return TecnicasModule;
}());
exports.TecnicasModule = TecnicasModule;
//# sourceMappingURL=tecnicas.module.js.map