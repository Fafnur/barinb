import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomPageComponent } from './room-page.component';

const routes: Routes = [
  {
    path: ':id',
    component: RoomPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomPageRoutingModule {}
