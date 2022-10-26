"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUsuarioDto = void 0;
var class_validator_1 = require("class-validator");
var messages_helpers_1 = require("../../../../../../../src/helpers/messages.helpers");
var regex_helpers_1 = require("../../../../../../../src/helpers/regex.helpers");
var CreateUsuarioDto = /** @class */ (function () {
    function CreateUsuarioDto() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], CreateUsuarioDto.prototype, "nome");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsEmail)()
    ], CreateUsuarioDto.prototype, "email");
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], CreateUsuarioDto.prototype, "cod_institucional");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.Matches)(regex_helpers_1.RegExHelper.password, { message: messages_helpers_1.MessagesHelpers.PASSWORD_VALID })
    ], CreateUsuarioDto.prototype, "senha");
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], CreateUsuarioDto.prototype, "perfil");
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], CreateUsuarioDto.prototype, "status");
    return CreateUsuarioDto;
}());
exports.CreateUsuarioDto = CreateUsuarioDto;
