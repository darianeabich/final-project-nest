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
exports.ProjetoEntity = void 0;
var typeorm_1 = require("typeorm");
var etapa_entity_1 = require("./../../etapas/entities/etapa.entity");
var tematica_entity_1 = require("./../../tematicas/entities/tematica.entity");
var ProjetoEntity = /** @class */ (function () {
    function ProjetoEntity() {
    }
    ProjetoEntity_1 = ProjetoEntity;
    var ProjetoEntity_1;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], ProjetoEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 45, nullable: false }),
        __metadata("design:type", String)
    ], ProjetoEntity.prototype, "titulo", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 1500, nullable: false }),
        __metadata("design:type", String)
    ], ProjetoEntity.prototype, "descricao", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true, nullable: false }),
        __metadata("design:type", Boolean)
    ], ProjetoEntity.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true, nullable: false }),
        __metadata("design:type", Boolean)
    ], ProjetoEntity.prototype, "finalizado", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ProjetoEntity_1; }, function (projeto) { return projeto.tematica; }),
        __metadata("design:type", tematica_entity_1.TematicaEntity)
    ], ProjetoEntity.prototype, "tematica", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", String)
    ], ProjetoEntity.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", String)
    ], ProjetoEntity.prototype, "updated_at", void 0);
    __decorate([
        (0, typeorm_1.DeleteDateColumn)(),
        __metadata("design:type", String)
    ], ProjetoEntity.prototype, "delete_at", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return etapa_entity_1.EtapaEntity; }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], ProjetoEntity.prototype, "etapas", void 0);
    ProjetoEntity = ProjetoEntity_1 = __decorate([
        (0, typeorm_1.Entity)({ name: 'projetos' })
    ], ProjetoEntity);
    return ProjetoEntity;
}());
exports.ProjetoEntity = ProjetoEntity;
//# sourceMappingURL=projeto.entity.js.map