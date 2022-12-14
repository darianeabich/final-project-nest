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
exports.RoleGuard = void 0;
/* eslint-disable prettier/prettier */
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core");
var RoleGuard = /** @class */ (function () {
    function RoleGuard(reflector) {
        this.reflector = reflector;
    }
    RoleGuard.prototype.canActivate = function (context) {
        var role = this.reflector.get('role', context.getHandler());
        if (!role) {
            return true;
        }
        var request = context.switchToHttp().getRequest();
        var user = request.user;
        return user.role === role;
    };
    RoleGuard = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [core_1.Reflector])
    ], RoleGuard);
    return RoleGuard;
}());
exports.RoleGuard = RoleGuard;
//# sourceMappingURL=role.guard.js.map