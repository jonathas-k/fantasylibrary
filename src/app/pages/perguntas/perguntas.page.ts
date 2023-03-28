import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Calculo } from 'src/app/calculo/calculo.model';
import { PerguntasService } from 'src/app/services/perguntas.service';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
})
export class PerguntasPage implements OnInit {
  public editMode = 1
  private calculo!: Calculo
  public calculoForm! : FormGroup;
  public arrayCalculo: any

  

  constructor(private formBuilder: FormBuilder,
    private perguntasService: PerguntasService,) { 
  }

    ngOnInit() {
      this.calculo = { id: Guid.createEmpty(), sexo: "", peso: "", horarioacor: "", horariodorm: "", resultado: "" };
      this.calculoForm = this.formBuilder.group({
        id: [this.calculo.id],
        sexo: [this.calculo.sexo],
        peso: [this.calculo.peso],
        horarioacor: [this.calculo.horarioacor],
        horariodorm: [this.calculo.horariodorm], 
        resultado: [this.calculo.resultado]
      });
      
      this.perguntasService.listarTodos().then(arrayCalculo => {this.arrayCalculo = arrayCalculo})  
    }

   
    

  edit(){
    switch (this.editMode){
      case 1:
        this.editMode = 2;
        break;

      case 2:
        this.editMode = 3;
        break;
    }
  }

  tela(){
    this.editMode = 1
  }

enviar(){
  if(this.calculoForm.valid){
    this.perguntasService.inserir(this.calculoForm.value)
  }
}
}
