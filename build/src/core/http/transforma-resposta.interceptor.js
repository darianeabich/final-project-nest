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
exports.TransfomaInterceptor = void 0;
var nest_response_1 = require("./nest-response");
var common_1 = require("@nestjs/common");
var rxjs_1 = require("rxjs");
var core_1 = require("@nestjs/core");
var TransfomaInterceptor = /** @class */ (function () {
    function TransfomaInterceptor(adapterHost) {
        this.httpAdapter = adapterHost.httpAdapter;
    }
    TransfomaInterceptor.prototype.intercept = function (context, next) {
        var _this = this;
        return next.handle().pipe((0, rxjs_1.map)(function (respostaDoControlador) {
            if (respostaDoControlador instanceof nest_response_1.NestResponse) {
                var contexto = context.switchToHttp();
                var resposta_1 = contexto.getResponse();
                var headers_1 = respostaDoControlador.headers, status = respostaDoControlador.status, body = respostaDoControlador.body;
                var nomesDosHeaders = Object.getOwnPropertyNames(headers_1);
                nomesDosHeaders.forEach(function (nomeDoHeader) {
                    var valorDoHeader = headers_1[nomeDoHeader];
                    _this.httpAdapter.setHeader(resposta_1, nomeDoHeader, valorDoHeader);
                });
                _this.httpAdapter.status(resposta_1, status);
                return body;
            }
            return respostaDoControlador;
        }));
    };
    TransfomaInterceptor = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [core_1.HttpAdapterHost])
    ], TransfomaInterceptor);
    return TransfomaInterceptor;
}());
exports.TransfomaInterceptor = TransfomaInterceptor;
//# sourceMappingURL=transforma-resposta.interceptor.js.map