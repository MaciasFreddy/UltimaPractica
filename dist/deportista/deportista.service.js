"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeportistaService = void 0;
const common_1 = require("@nestjs/common");
const deportista_entity_1 = require("./entities/deportista.entity");
let DeportistaService = class DeportistaService {
    constructor() {
        this.deportistas = [
            { id: 1, nombre: 'Freed', peso: '55', altura: '156cm', edad: 19 },
            { id: 2, nombre: 'Alay', peso: '50', altura: '158cm', edad: 20 },
        ];
    }
    create(createDeportistaDto) {
        const deportista = new deportista_entity_1.Deportista();
        deportista.id = Math.max(...this.deportistas.map(elemento => elemento.id), 0) + 1;
        deportista.nombre = createDeportistaDto.nombre;
        deportista.peso = createDeportistaDto.peso;
        deportista.altura = createDeportistaDto.altura;
        deportista.edad = createDeportistaDto.edad;
        this.deportistas.push(deportista);
        return deportista;
    }
    findAll() {
        return this.deportistas;
    }
    findOne(id) {
        const deportista = this.deportistas.find(deportista => deportista.id === id);
        if (!deportista)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return deportista;
    }
    update(id, updateDeportistaDto) {
        const { nombre, peso, altura, edad, } = updateDeportistaDto;
        const deportista = this.findOne(id);
        if (nombre)
            deportista.nombre = nombre;
        if (peso)
            deportista.peso = peso;
        if (altura)
            deportista.altura = altura;
        this.deportistas = this.deportistas.map(elemento => {
            if (elemento.id === id)
                return deportista;
            return elemento;
        });
        return deportista;
    }
    remove(id) {
        this.findOne(id);
        this.deportistas = this.deportistas.filter(elemento => elemento.id !== id);
    }
};
DeportistaService = __decorate([
    (0, common_1.Injectable)()
], DeportistaService);
exports.DeportistaService = DeportistaService;
//# sourceMappingURL=deportista.service.js.map