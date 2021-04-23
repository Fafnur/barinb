import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingPageComponent } from './booking-page.component';

const routes: Routes = [
  {
    path: '',
    component: BookingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingPageRoutingModule {}
