import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailModalPagePage } from './detail-modal-page.page';

const routes: Routes = [
  {
    path: '',
    component: DetailModalPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailModalPagePageRoutingModule {}
