import { CreateDeportistaDto } from './create-deportista.dto';
declare const UpdateDeportistaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDeportistaDto>>;
export declare class UpdateDeportistaDto extends UpdateDeportistaDto_base {
    estado?: boolean;
}
export {};
