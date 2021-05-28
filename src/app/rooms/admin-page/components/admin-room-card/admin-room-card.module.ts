import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@app/core/navigation/shared';
import { PersonSharedModule } from '@app/persons/shared';
import { CarouselModule } from '@app/ui/carousel';

import { AdminBuildingLinkModule } from '../admin-building-link/admin-building-link.module';
import { AdminPersonLinkModule } from '../admin-person-link/admin-person-link.module';
import { AdminRoomActionsModule } from '../admin-room-actions/admin-room-actions.module';
import { AdminRoomCardComponent } from './admin-room-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminRoomActionsModule,
    AdminBuildingLinkModule,
    AdminPersonLinkModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CarouselModule,
    PersonSharedModule,
    NavigationSharedModule,
  ],
  declarations: [AdminRoomCardComponent],
  exports: [AdminRoomCardComponent],
})
export class AdminRoomCardModule {}
