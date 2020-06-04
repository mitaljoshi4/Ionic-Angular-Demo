import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-modal-page',
  templateUrl: './detail-modal-page.page.html',
  styleUrls: ['./detail-modal-page.page.scss'],
})
export class DetailModalPagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
