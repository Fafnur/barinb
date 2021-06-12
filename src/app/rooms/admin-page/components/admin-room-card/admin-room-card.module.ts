import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { AdminBuildingLinkModule, AdminPersonLinkModule } from '@app/admin/links/shared';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { PersonSharedModule } from '@app/persons/shared';
import { CarouselModule } from '@app/ui/carousel';
import { SharedModule } from '@app/ui/shared';

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
    SharedModule,
  ],
  declarations: [AdminRoomCardComponent],
  exports: [AdminRoomCardComponent],
})
export class AdminRoomCardModule {}
