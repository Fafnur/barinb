import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@app/core/navigation/shared';

import { AdminPersonLinkComponent } from './admin-person-link.component';

@NgModule({
  imports: [CommonModule, RouterModule, NavigationSharedModule, MatButtonModule, MatIconModule],
  declarations: [AdminPersonLinkComponent],
  exports: [AdminPersonLinkComponent],
})
export class AdminPersonLinkModule {}
