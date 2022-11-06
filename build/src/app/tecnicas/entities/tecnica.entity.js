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
exports.TecnicaEntity = void 0;
var typeorm_1 = require("typeorm");
var TecnicaEntity = /** @class */ (function () {
    function TecnicaEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], TecnicaEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 45, nullable: false }),
        __metadata("design:type", String)
    ], TecnicaEntity.prototype, "titulo", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 1500, nullable: false }),
        __metadata("design:type", String)
    ], TecnicaEntity.prototype, "descricao", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true, nullable: false }),
        __metadata("design:type", Boolean)
    ], TecnicaEntity.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 2000, nullable: false }),
        __metadata("design:type", String)
    ], TecnicaEntity.prototype, "como_usar", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 1500, nullable: false }),
        __metadata("design:type", String)
    ], TecnicaEntity.prototype, "quando_usar", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 500, nullable: false }),
        __metadata("design:type", String)
    ], TecnicaEntity.prototype, "material", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 100, nullable: false }),
        __metadata("design:type", String)
    ], TecnicaEntity.prototype, "tempo", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 'NORMAL', nullable: false }),
        __metadata("design:type", String)
    ], TecnicaEntity.prototype, "tipo", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", String)
    ], TecnicaEntity.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", String)
    ], TecnicaEntity.prototype, "updated_at", void 0);
    __decorate([
        (0, typeorm_1.DeleteDateColumn)(),
        __metadata("design:type", String)
    ], TecnicaEntity.prototype, "delete_at", void 0);
    TecnicaEntity = __decorate([
        (0, typeorm_1.Entity)({ name: 'tecnicas' })
    ], TecnicaEntity);
    return TecnicaEntity;
}());
exports.TecnicaEntity = TecnicaEntity;
//# sourceMappingURL=tecnica.entity.js.map