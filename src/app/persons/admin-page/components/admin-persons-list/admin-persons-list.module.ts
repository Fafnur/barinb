import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminPersonCardModule } from '../admin-person-card/admin-person-card.module';
import { AdminPersonsListComponent } from './admin-persons-list.component';

@NgModule({
  imports: [CommonModule, AdminPersonCardModule],
  declarations: [AdminPersonsListComponent],
  exports: [AdminPersonsListComponent],
})
export class AdminPersonsListModule {}
