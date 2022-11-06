"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GruposController = void 0;
var common_1 = require("@nestjs/common");
var grupos_service_1 = require("./grupos.service");
var create_grupo_dto_1 = require("./dto/create-grupo.dto");
var update_grupo_dto_1 = require("./dto/update-grupo.dto");
var GruposController = /** @class */ (function () {
    function GruposController(gruposService) {
        this.gruposService = gruposService;
    }
    GruposController.prototype.create = function (createGrupoDto) {
        return this.gruposService.create(createGrupoDto);
    };
    GruposController.prototype.findAll = function () {
        return this.gruposService.findAll();
    };
    GruposController.prototype.findOne = function (id) {
        return this.gruposService.findOne(+id);
    };
    GruposController.prototype.update = function (id, updateGrupoDto) {
        return this.gruposService.update(+id, updateGrupoDto);
    };
    GruposController.prototype.remove = function (id) {
        return this.gruposService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_grupo_dto_1.CreateGrupoDto]),
        __metadata("design:returntype", void 0)
    ], GruposController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GruposController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], GruposController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_grupo_dto_1.UpdateGrupoDto]),
        __metadata("design:returntype", void 0)
    ], GruposController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], GruposController.prototype, "remove", null);
    GruposController = __decorate([
        (0, common_1.Controller)('grupos'),
        __metadata("design:paramtypes", [grupos_service_1.GruposService])
    ], GruposController);
    return GruposController;
}());
exports.GruposController = GruposController;
//# sourceMappingURL=grupos.controller.js.map