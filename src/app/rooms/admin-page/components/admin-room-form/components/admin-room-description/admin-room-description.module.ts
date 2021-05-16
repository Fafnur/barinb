import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AdminRoomDescriptionComponent } from './admin-room-description.component';

@NgModule({
  imports: [CommonModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
  declarations: [AdminRoomDescriptionComponent],
  exports: [AdminRoomDescriptionComponent],
})
export class AdminRoomDescriptionModule {}
