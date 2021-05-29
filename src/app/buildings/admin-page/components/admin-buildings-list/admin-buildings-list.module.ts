import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminBuildingCardModule } from '../admin-building-card/admin-building-card.module';
import { AdminBuildingsListComponent } from './admin-buildings-list.component';

@NgModule({
  imports: [CommonModule, AdminBuildingCardModule],
  declarations: [AdminBuildingsListComponent],
  exports: [AdminBuildingsListComponent],
})
export class AdminBuildingsListModule {}
