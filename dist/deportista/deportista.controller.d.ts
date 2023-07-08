import { DeportistaService } from './deportista.service';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';
import { Deportista } from './entities/deportista.entity';
export declare class DeportistaController {
    private readonly deportistaService;
    constructor(deportistaService: DeportistaService);
    create(createDeportistaDto: CreateDeportistaDto): Deportista;
    findAll(): Deportista[];
    findOne(id: number): Deportista;
    update(id: string, updateDeportistaDto: UpdateDeportistaDto): Deportista;
    remove(id: string): void;
}
