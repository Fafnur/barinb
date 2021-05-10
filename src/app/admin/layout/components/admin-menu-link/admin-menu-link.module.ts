import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminMenuModule } from '@app/admin/menu';
import { NavigationSharedModule } from '@app/core/navigation/shared';

import { AdminMenuLinkComponent } from './admin-menu-link.component';

@NgModule({
  imports: [CommonModule, RouterModule, AdminMenuModule, NavigationSharedModule],
  declarations: [AdminMenuLinkComponent],
  exports: [AdminMenuLinkComponent],
})
export class AdminMenuLinkModule {}
