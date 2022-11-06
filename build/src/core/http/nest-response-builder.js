"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestResponseBuilder = void 0;
/* eslint-disable @typescript-eslint/ban-types */
var nest_response_1 = require("./nest-response");
var NestResponseBuilder = /** @class */ (function () {
    function NestResponseBuilder() {
        this.response = {
            status: 200,
            headers: {},
            body: {},
        };
    }
    NestResponseBuilder.prototype.comStatus = function (status) {
        this.response.status = status;
        return this;
    };
    NestResponseBuilder.prototype.comHeaders = function (headers) {
        this.response.headers = headers;
        return this;
    };
    NestResponseBuilder.prototype.comBody = function (body) {
        this.response.body = body;
        return this;
    };
    NestResponseBuilder.prototype.build = function () {
        return new nest_response_1.NestResponse(this.response);
    };
    return NestResponseBuilder;
}());
exports.NestResponseBuilder = NestResponseBuilder;
//# sourceMappingURL=nest-response-builder.js.map