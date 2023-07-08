import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';
import { Deportista } from './entities/deportista.entity';

@Injectable()
export class DeportistaService {

  private deportistas: Deportista[]=[
    //{id:1,  nombre:'Freddy, peso:49,altura:'168', edad:'20'},
    {id:1,  nombre:'Freed', peso:'55',altura:'156cm', edad:19},
    {id:2,  nombre:'Alay', peso:'50',altura:'158cm', edad:20},
  ]

  create(createDeportistaDto: CreateDeportistaDto) {
    const deportista = new Deportista();
    deportista.id=  Math.max( ... this.deportistas.map(elemento => elemento.id),0 )+1 ;
    deportista.nombre= createDeportistaDto.nombre;
    deportista.peso= createDeportistaDto.peso;
    deportista.altura= createDeportistaDto.altura;
    deportista.edad= createDeportistaDto.edad;
    this.deportistas.push(deportista);
    return deportista;
  }

  findAll() : Deportista[] {
    return this.deportistas;
  }

  findOne(id: number) {
    const deportista =  this.deportistas.find(deportista=> deportista.id===id);
    if (!deportista) throw new NotFoundException(`ID ${id} not found`)
    return deportista;
  }

  update(id: number, updateDeportistaDto: UpdateDeportistaDto) {
    const { nombre, peso, altura, edad, } = updateDeportistaDto;
    const deportista = this.findOne(id);
    if (nombre) deportista.nombre= nombre;
    if (peso) deportista.peso= peso;
    if (altura) deportista.altura= altura;
  

    this.deportistas =  this.deportistas.map( elemento=> {
      if (elemento.id===id) return deportista;
      return elemento;
    } )

    return deportista;

  }

  remove(id: number) {
    this.findOne(id);
    this.deportistas =  this.deportistas.filter(elemento=> elemento.id!== id);
  }
}
