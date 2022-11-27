'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.TematicasController = void 0;
/* eslint-disable prettier/prettier */
var common_1 = require('@nestjs/common');
var tematicas_service_1 = require('./tematicas.service');
var create_tematica_dto_1 = require('./dto/create-tematica.dto');
var update_tematica_dto_1 = require('./dto/update-tematica.dto');
var TematicasController = /** @class */ (function () {
  function TematicasController(tematicasService) {
    this.tematicasService = tematicasService;
  }
  TematicasController.prototype.index = function (page, limit) {
    if (page === void 0) {
      page = 1;
    }
    if (limit === void 0) {
      limit = 10;
    }
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        limit = limit > 100 ? 100 : limit;
        return [
          2 /*return*/,
          this.tematicasService.findAll({
            page: page,
            limit: limit,
            route: 'http://localhost:3000/tematicas',
          }),
        ];
      });
    });
  };
  TematicasController.prototype.findOne = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [
          2 /*return*/,
          this.tematicasService.findOneOrFail({ where: { id: id } }),
        ];
      });
    });
  };
  TematicasController.prototype.create = function (createTematicaDto) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.tematicasService.create(createTematicaDto)];
      });
    });
  };
  TematicasController.prototype.update = function (id, updateTematicaDto) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [
          2 /*return*/,
          this.tematicasService.update(+id, updateTematicaDto),
        ];
      });
    });
  };
  TematicasController.prototype.remove = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.tematicasService.remove(+id)];
      });
    });
  };
  __decorate(
    [
      (0, common_1.Get)(),
      __param(0, (0, common_1.Query)('page')),
      __param(1, (0, common_1.Query)('limit')),
      __metadata('design:type', Function),
      __metadata('design:paramtypes', [Object, Object]),
      __metadata('design:returntype', Promise),
    ],
    TematicasController.prototype,
    'index',
    null,
  );
  __decorate(
    [
      (0, common_1.Get)(':id'),
      __param(0, (0, common_1.Param)('id')),
      __metadata('design:type', Function),
      __metadata('design:paramtypes', [Number]),
      __metadata('design:returntype', Promise),
    ],
    TematicasController.prototype,
    'findOne',
    null,
  );
  __decorate(
    [
      (0, common_1.Post)(),
      __param(0, (0, common_1.Body)()),
      __metadata('design:type', Function),
      __metadata('design:paramtypes', [
        create_tematica_dto_1.CreateTematicaDto,
      ]),
      __metadata('design:returntype', Promise),
    ],
    TematicasController.prototype,
    'create',
    null,
  );
  __decorate(
    [
      (0, common_1.Put)(':id'),
      __param(0, (0, common_1.Param)('id')),
      __param(1, (0, common_1.Body)()),
      __metadata('design:type', Function),
      __metadata('design:paramtypes', [
        Number,
        update_tematica_dto_1.UpdateTematicaDto,
      ]),
      __metadata('design:returntype', Promise),
    ],
    TematicasController.prototype,
    'update',
    null,
  );
  __decorate(
    [
      (0, common_1.Delete)(':id'),
      __param(0, (0, common_1.Param)('id')),
      __metadata('design:type', Function),
      __metadata('design:paramtypes', [Number]),
      __metadata('design:returntype', Promise),
    ],
    TematicasController.prototype,
    'remove',
    null,
  );
  TematicasController = __decorate(
    [
      (0, common_1.Controller)('tematicas'),
      __metadata('design:paramtypes', [tematicas_service_1.TematicasService]),
    ],
    TematicasController,
  );
  return TematicasController;
})();
exports.TematicasController = TematicasController;
//# sourceMappingURL=tematicas.controller.js.map
