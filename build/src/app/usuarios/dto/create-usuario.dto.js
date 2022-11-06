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
exports.CreateUsuarioDto = void 0;
var class_validator_1 = require("class-validator");
var messages_helpers_1 = require("../../../helpers/messages.helpers");
var regex_helpers_1 = require("../../../helpers/regex.helpers");
var CreateUsuarioDto = /** @class */ (function () {
    function CreateUsuarioDto() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], CreateUsuarioDto.prototype, "nome", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsEmail)(),
        __metadata("design:type", String)
    ], CreateUsuarioDto.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], CreateUsuarioDto.prototype, "cod_institucional", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.Matches)(regex_helpers_1.RegExHelper.password, { message: messages_helpers_1.MessagesHelpers.PASSWORD_VALID }),
        __metadata("design:type", String)
    ], CreateUsuarioDto.prototype, "senha", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], CreateUsuarioDto.prototype, "perfil", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", Boolean)
    ], CreateUsuarioDto.prototype, "status", void 0);
    return CreateUsuarioDto;
}());
exports.CreateUsuarioDto = CreateUsuarioDto;
//# sourceMappingURL=create-usuario.dto.js.map