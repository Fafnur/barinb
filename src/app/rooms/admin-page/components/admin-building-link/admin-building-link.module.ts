import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@app/core/navigation/shared';

import { AdminBuildingLinkComponent } from './admin-building-link.component';

@NgModule({
  imports: [CommonModule, RouterModule, NavigationSharedModule, MatButtonModule, MatIconModule],
  declarations: [AdminBuildingLinkComponent],
  exports: [AdminBuildingLinkComponent],
})
export class AdminBuildingLinkModule {}
