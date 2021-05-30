import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { PersonSharedModule } from '@app/persons/shared';

import { AdminPersonBuildingsComponent } from './admin-person-buildings.component';

@NgModule({
  imports: [CommonModule, MatInputModule, MatSelectModule, ReactiveFormsModule, PersonSharedModule],
  declarations: [AdminPersonBuildingsComponent],
  exports: [AdminPersonBuildingsComponent],
})
export class AdminPersonBuildingsModule {}
