"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GruposModule = void 0;
var common_1 = require("@nestjs/common");
var grupos_service_1 = require("./grupos.service");
var grupos_controller_1 = require("./grupos.controller");
var typeorm_1 = require("@nestjs/typeorm");
var grupo_entity_1 = require("./entities/grupo.entity");
var GruposModule = /** @class */ (function () {
    function GruposModule() {
    }
    GruposModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([grupo_entity_1.GrupoEntity])],
            controllers: [grupos_controller_1.GruposController],
            providers: [grupos_service_1.GruposService],
            exports: [grupos_service_1.GruposService],
        })
    ], GruposModule);
    return GruposModule;
}());
exports.GruposModule = GruposModule;
//# sourceMappingURL=grupos.module.js.map