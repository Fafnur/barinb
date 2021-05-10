import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

import { AdminMenuModule } from '@app/admin/menu';
import { NavigationSharedModule } from '@app/core/navigation/shared';

import { AdminMobileMenuComponent } from './admin-mobile-menu.component';

@NgModule({
  imports: [CommonModule, RouterModule, AdminMenuModule, MatTabsModule, NavigationSharedModule],
  declarations: [AdminMobileMenuComponent],
  exports: [AdminMobileMenuComponent],
})
export class AdminMobileMenuModule {}
