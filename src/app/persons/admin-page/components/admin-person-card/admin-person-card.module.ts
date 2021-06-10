import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { AdminBuildingLinkModule, AdminPersonLinkModule } from '@app/admin/links/shared';
import { BuildingSharedModule } from '@app/buildings/shared';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { PersonSharedModule } from '@app/persons/shared';
import { CarouselModule } from '@app/ui/carousel';
import { SharedModule } from '@app/ui/shared';

import { AdminPersonActionsModule } from '../admin-person-actions/admin-person-actions.module';
import { AdminPersonCardComponent } from './admin-person-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminPersonActionsModule,
    AdminBuildingLinkModule,
    AdminPersonLinkModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CarouselModule,
    PersonSharedModule,
    NavigationSharedModule,
    BuildingSharedModule,
    SharedModule,
  ],
  declarations: [AdminPersonCardComponent],
  exports: [AdminPersonCardComponent],
})
export class AdminPersonCardModule {}
