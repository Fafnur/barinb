import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { AdminBuildingLinkModule, AdminPersonLinkModule } from '@app/admin/links/shared';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { PersonSharedModule } from '@app/persons/shared';
import { RoomSharedModule } from '@app/rooms/shared';
import { CarouselModule } from '@app/ui/carousel';
import { SharedModule } from '@app/ui/shared';

import { AdminBuildingActionsModule } from '../admin-building-actions/admin-building-actions.module';
import { AdminBuildingCardComponent } from './admin-building-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminBuildingActionsModule,
    AdminBuildingLinkModule,
    AdminPersonLinkModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CarouselModule,
    PersonSharedModule,
    NavigationSharedModule,
    RoomSharedModule,
    SharedModule,
  ],
  declarations: [AdminBuildingCardComponent],
  exports: [AdminBuildingCardComponent],
})
export class AdminBuildingCardModule {}
