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
exports.UsuarioEntity = void 0;
var typeorm_1 = require("typeorm");
var bcrypt_1 = require("bcrypt");
var class_transformer_1 = require("class-transformer");
var UsuarioEntity = /** @class */ (function () {
    function UsuarioEntity() {
    }
    UsuarioEntity.prototype.hashPassword = function () {
        this.senha = (0, bcrypt_1.hashSync)(this.senha, 8);
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], UsuarioEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 45, nullable: false }),
        __metadata("design:type", String)
    ], UsuarioEntity.prototype, "nome", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 255, unique: true, nullable: false }),
        __metadata("design:type", String)
    ], UsuarioEntity.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 15, unique: true, nullable: false }),
        __metadata("design:type", String)
    ], UsuarioEntity.prototype, "cod_institucional", void 0);
    __decorate([
        (0, class_transformer_1.Exclude)({
            toPlainOnly: true,
        }),
        (0, typeorm_1.Column)({ length: 180, nullable: false }),
        __metadata("design:type", String)
    ], UsuarioEntity.prototype, "senha", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 'PARTICIPANTE', nullable: false }),
        __metadata("design:type", String)
    ], UsuarioEntity.prototype, "perfil", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true, nullable: false }),
        __metadata("design:type", Boolean)
    ], UsuarioEntity.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", String)
    ], UsuarioEntity.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", String)
    ], UsuarioEntity.prototype, "updated_at", void 0);
    __decorate([
        (0, typeorm_1.DeleteDateColumn)(),
        __metadata("design:type", String)
    ], UsuarioEntity.prototype, "delete_at", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UsuarioEntity.prototype, "hashPassword", null);
    UsuarioEntity = __decorate([
        (0, typeorm_1.Entity)({ name: 'usuarios' })
    ], UsuarioEntity);
    return UsuarioEntity;
}());
exports.UsuarioEntity = UsuarioEntity;
//# sourceMappingURL=usuarios.entity.js.map