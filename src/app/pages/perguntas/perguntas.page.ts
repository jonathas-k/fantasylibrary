import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
})
export class PerguntasPage implements OnInit {
  public editMode = 1

  constructor() { }


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

  ngOnInit() {
  }

}
