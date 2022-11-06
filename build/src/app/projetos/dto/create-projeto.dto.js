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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjetoDto = void 0;
var tematica_entity_1 = require("./../../tematicas/entities/tematica.entity");
var class_validator_1 = require("class-validator");
var CreateProjetoDto = /** @class */ (function () {
    function CreateProjetoDto() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], CreateProjetoDto.prototype, "titulo", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], CreateProjetoDto.prototype, "descricao", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", Boolean)
    ], CreateProjetoDto.prototype, "status", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", Boolean)
    ], CreateProjetoDto.prototype, "finalizado", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", tematica_entity_1.TematicaEntity)
    ], CreateProjetoDto.prototype, "tematica", void 0);
    return CreateProjetoDto;
}());
exports.CreateProjetoDto = CreateProjetoDto;
//# sourceMappingURL=create-projeto.dto.js.map