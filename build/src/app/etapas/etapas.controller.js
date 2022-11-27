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
exports.EtapasController = void 0;
var common_1 = require('@nestjs/common');
var create_etapa_dto_1 = require('../../app/etapas/dto/create-etapa.dto');
var update_etapa_dto_1 = require('../../app/etapas/dto/update-etapa.dto');
var etapas_service_1 = require('./etapas.service');
/* eslint-disable prettier/prettier */
var EtapasController = /** @class */ (function () {
  function EtapasController(etapasService) {
    this.etapasService = etapasService;
  }
  EtapasController.prototype.index = function (page, limit) {
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
          this.etapasService.findAll({
            page: page,
            limit: limit,
            route: 'http://localhost:3000/etapas',
          }),
        ];
      });
    });
  };
  EtapasController.prototype.show = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [
          2 /*return*/,
          this.etapasService.findOneOrFail({ where: { id: id } }),
        ];
      });
    });
  };
  // @Role('admin')
  EtapasController.prototype.store = function (createEtapaDto) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.etapasService.create(createEtapaDto)];
      });
    });
  };
  // @Role('admin')
  EtapasController.prototype.update = function (id, updateEtapaDto) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, this.etapasService.update(+id, updateEtapaDto)];
      });
    });
  };
  // @Role('admin')
  EtapasController.prototype.destroy = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.etapasService.remove(id)];
          case 1:
            return [2 /*return*/, _a.sent()];
        }
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
    EtapasController.prototype,
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
    EtapasController.prototype,
    'show',
    null,
  );
  __decorate(
    [
      (0, common_1.Post)(),
      __param(0, (0, common_1.Body)()),
      __metadata('design:type', Function),
      __metadata('design:paramtypes', [create_etapa_dto_1.CreateEtapaDto]),
      __metadata('design:returntype', Promise),
    ],
    EtapasController.prototype,
    'store',
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
        update_etapa_dto_1.UpdateEtapaDto,
      ]),
      __metadata('design:returntype', Promise),
    ],
    EtapasController.prototype,
    'update',
    null,
  );
  __decorate(
    [
      (0, common_1.Delete)(':id'),
      (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
      __param(0, (0, common_1.Param)('id')),
      __metadata('design:type', Function),
      __metadata('design:paramtypes', [Number]),
      __metadata('design:returntype', Promise),
    ],
    EtapasController.prototype,
    'destroy',
    null,
  );
  EtapasController = __decorate(
    [
      (0, common_1.Controller)('etapas'),
      __metadata('design:paramtypes', [etapas_service_1.EtapasService]),
    ],
    EtapasController,
  );
  return EtapasController;
})();
exports.EtapasController = EtapasController;
//# sourceMappingURL=etapas.controller.js.map
