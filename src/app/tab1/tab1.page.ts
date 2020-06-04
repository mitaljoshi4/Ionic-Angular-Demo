import { Component } from '@angular/core';
import { DetailModalPagePage } from '../detail-modal-page/detail-modal-page.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  currentEnable: number = 1;
  inProgress: boolean = true;
  constructor(private modalController: ModalController) { }

  checkDisability(status) {
    return this.currentEnable == status ? false : true;
  }
  changeNext() {
    if (this.currentEnable < 5) {
      this.currentEnable = this.currentEnable + 1;
    } else {
      this.currentEnable = 1
      this.presentDetailModal();
    }
  }
  getImageURL(status) {
    if (this.currentEnable == status) {
      return "./assets/animatcons/hourglass.gif";
    } else if (this.currentEnable > status) {
      return "./assets/animatcons/check.gif";
    } else {
      return "./assets/animatcons/activity.gif";
    }
  }
  async presentDetailModal() {
    const modal = await this.modalController.create({
      component: DetailModalPagePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
