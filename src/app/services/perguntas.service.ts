import { Injectable } from '@angular/core';
import { Calculo } from '../calculo/calculo.model';
import {Guid} from 'guid-typescript';
import {Storage} from '@ionic/storage-angular'


@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  constructor(
    private storage:Storage
  ) { }

inserir(argumento: Calculo){
  argumento.id = Guid.create()
  this.storage.set(argumento.id.toString(), JSON.stringify(argumento))
}

async listarTodos(){
  let arrayCalculo : Calculo [] = [];
  
  await this.storage.forEach((value:string)=>
  {const calculo:Calculo =JSON.parse(value); arrayCalculo.push(calculo)})
  
  return arrayCalculo; 
}

}
