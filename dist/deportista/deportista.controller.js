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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeportistaController = void 0;
const common_1 = require("@nestjs/common");
const deportista_service_1 = require("./deportista.service");
const create_deportista_dto_1 = require("./dto/create-deportista.dto");
const update_deportista_dto_1 = require("./dto/update-deportista.dto");
let DeportistaController = class DeportistaController {
    constructor(deportistaService) {
        this.deportistaService = deportistaService;
    }
    create(createDeportistaDto) {
        return this.deportistaService.create(createDeportistaDto);
    }
    findAll() {
        return this.deportistaService.findAll();
    }
    findOne(id) {
        return this.deportistaService.findOne(id);
    }
    update(id, updateDeportistaDto) {
        return this.deportistaService.update(+id, updateDeportistaDto);
    }
    remove(id) {
        return this.deportistaService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_deportista_dto_1.CreateDeportistaDto]),
    __metadata("design:returntype", void 0)
], DeportistaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], DeportistaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeportistaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_deportista_dto_1.UpdateDeportistaDto]),
    __metadata("design:returntype", void 0)
], DeportistaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeportistaController.prototype, "remove", null);
DeportistaController = __decorate([
    (0, common_1.Controller)('deportista'),
    __metadata("design:paramtypes", [deportista_service_1.DeportistaService])
], DeportistaController);
exports.DeportistaController = DeportistaController;
//# sourceMappingURL=deportista.controller.js.map