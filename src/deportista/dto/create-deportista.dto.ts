import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDeportistaDto {
    @IsString()
    @IsNotEmpty()
    identificacion:string;

    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    peso:string;
    

    @IsString()
    @IsNotEmpty()
    altura:string;

    @IsNumber()
    @IsNotEmpty()
    edad: number;
}
