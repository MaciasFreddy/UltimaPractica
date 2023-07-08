import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';
import { Deportista } from './entities/deportista.entity';
export declare class DeportistaService {
    private deportistas;
    create(createDeportistaDto: CreateDeportistaDto): Deportista;
    findAll(): Deportista[];
    findOne(id: number): Deportista;
    update(id: number, updateDeportistaDto: UpdateDeportistaDto): Deportista;
    remove(id: number): void;
}
