import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonModal)
  modal!: IonModal;
  time: any;




  constructor() {



    
  }


  message = '';
  name!: string;

  voltar() {
    this.modal.dismiss(this.time, 'voltar');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'voltar') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}




