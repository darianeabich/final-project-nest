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
exports.EtapaEntity = void 0;
var typeorm_1 = require("typeorm");
var tecnica_entity_1 = require("../../tecnicas/entities/tecnica.entity");
var EtapaEntity = /** @class */ (function () {
    function EtapaEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], EtapaEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 45, nullable: false }),
        __metadata("design:type", String)
    ], EtapaEntity.prototype, "titulo", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 1500, nullable: false }),
        __metadata("design:type", String)
    ], EtapaEntity.prototype, "descricao", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true }),
        __metadata("design:type", Boolean)
    ], EtapaEntity.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", String)
    ], EtapaEntity.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", String)
    ], EtapaEntity.prototype, "updated_at", void 0);
    __decorate([
        (0, typeorm_1.DeleteDateColumn)(),
        __metadata("design:type", String)
    ], EtapaEntity.prototype, "delete_at", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return tecnica_entity_1.TecnicaEntity; }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], EtapaEntity.prototype, "tecnicas", void 0);
    EtapaEntity = __decorate([
        (0, typeorm_1.Entity)({ name: 'etapas' })
    ], EtapaEntity);
    return EtapaEntity;
}());
exports.EtapaEntity = EtapaEntity;
//# sourceMappingURL=etapa.entity.js.map