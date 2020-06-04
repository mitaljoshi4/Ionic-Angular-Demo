import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  currentEnable: number = 1;
  inProgress: boolean = true;
  constructor() { }

  checkDisability(status) {
    return this.currentEnable == status ? false : true;
  }
  changeNext() {
    if (this.currentEnable < 5) {
      this.currentEnable = this.currentEnable + 1;
    } else {
      this.currentEnable = 1
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
}
