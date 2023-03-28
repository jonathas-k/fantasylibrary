import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  @ViewChild(IonModal)
  modal!: IonModal;
  time: any;
  
  constructor() { }

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

  ngOnInit() {
  }

}
