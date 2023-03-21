import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerguntasPageRoutingModule } from './perguntas-routing.module';

import { PerguntasPage } from './perguntas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerguntasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PerguntasPage]
})
export class PerguntasPageModule {}
