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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TecnicasService = void 0;
var tecnica_entity_1 = require("./entities/tecnica.entity");
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("typeorm");
var nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
var TecnicasService = /** @class */ (function () {
    function TecnicasService(tecnicaRepository) {
        this.tecnicaRepository = tecnicaRepository;
    }
    TecnicasService.prototype.findAll = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var queryBuilder;
            return __generator(this, function (_a) {
                queryBuilder = this.tecnicaRepository.createQueryBuilder('tecnica');
                queryBuilder.select([
                    'tecnica.id',
                    'tecnica.titulo',
                    'tecnica.descricao',
                    'tecnica.como_usar',
                    'tecnica.quando_usar',
                    'tecnica.material',
                    'tecnica.tempo',
                    'tecnica.tipo',
                    'tecnica.status',
                ]);
                queryBuilder.orderBy('tecnica.id', 'ASC');
                return [2 /*return*/, (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, options)];
            });
        });
    };
    TecnicasService.prototype.findAllWithoutPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tecnicaRepository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TecnicasService.prototype.findOneOrFail = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.tecnicaRepository.findOneOrFail(options)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw new common_1.NotFoundException(error_1.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TecnicasService.prototype.store = function (createTecnicaDto) {
        return __awaiter(this, void 0, void 0, function () {
            var tecnicaCriada;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tecnicaCriada = this.tecnicaRepository.create(createTecnicaDto);
                        return [4 /*yield*/, this.tecnicaRepository.save(tecnicaCriada)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TecnicasService.prototype.update = function (id, updateTecnicaDto) {
        return __awaiter(this, void 0, void 0, function () {
            var tecnicaEncontrada;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOneOrFail({
                            where: { id: id },
                        })];
                    case 1:
                        tecnicaEncontrada = _a.sent();
                        if (tecnicaEncontrada.titulo !== updateTecnicaDto.titulo) {
                            tecnicaEncontrada.titulo = updateTecnicaDto.titulo;
                        }
                        if (tecnicaEncontrada.descricao !== updateTecnicaDto.descricao) {
                            tecnicaEncontrada.descricao = updateTecnicaDto.descricao;
                        }
                        if (tecnicaEncontrada.como_usar !== updateTecnicaDto.como_usar) {
                            tecnicaEncontrada.como_usar = updateTecnicaDto.como_usar;
                        }
                        if (tecnicaEncontrada.quando_usar !== updateTecnicaDto.quando_usar) {
                            tecnicaEncontrada.quando_usar = updateTecnicaDto.quando_usar;
                        }
                        if (tecnicaEncontrada.material !== updateTecnicaDto.material) {
                            tecnicaEncontrada.material = updateTecnicaDto.material;
                        }
                        if (tecnicaEncontrada.tempo !== updateTecnicaDto.tempo) {
                            tecnicaEncontrada.tempo = updateTecnicaDto.tempo;
                        }
                        if (tecnicaEncontrada.tipo !== updateTecnicaDto.tipo) {
                            tecnicaEncontrada.tipo = updateTecnicaDto.tipo;
                        }
                        if (tecnicaEncontrada.status !== updateTecnicaDto.status) {
                            tecnicaEncontrada.status = updateTecnicaDto.status;
                        }
                        this.tecnicaRepository.merge(tecnicaEncontrada, updateTecnicaDto);
                        return [4 /*yield*/, this.tecnicaRepository.save(tecnicaEncontrada)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TecnicasService.prototype.destroy = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOneOrFail({ where: { id: id } })];
                    case 1:
                        _a.sent();
                        this.tecnicaRepository.softDelete(id);
                        return [2 /*return*/];
                }
            });
        });
    };
    TecnicasService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(tecnica_entity_1.TecnicaEntity)),
        __metadata("design:paramtypes", [typeorm_2.Repository])
    ], TecnicasService);
    return TecnicasService;
}());
exports.TecnicasService = TecnicasService;
//# sourceMappingURL=tecnicas.service.js.map