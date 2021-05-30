import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { CarouselModule } from '@app/ui/carousel';

import { AdminPersonActionsModule } from '../admin-person-actions/admin-person-actions.module';
import { AdminPersonsTableComponent } from './admin-persons-table.component';

@NgModule({
  imports: [CommonModule, AdminPersonActionsModule, MatTableModule, MatButtonModule, MatIconModule, CarouselModule],
  declarations: [AdminPersonsTableComponent],
  exports: [AdminPersonsTableComponent],
})
export class AdminPersonsTableModule {}
