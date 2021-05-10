import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminMenuModule } from '@app/admin/menu';

import { AdminMenuLinkModule } from '../admin-menu-link/admin-menu-link.module';
import { AdminMobileMenuComponent } from './admin-mobile-menu.component';

@NgModule({
  imports: [CommonModule, RouterModule, AdminMenuModule, AdminMenuLinkModule],
  declarations: [AdminMobileMenuComponent],
  exports: [AdminMobileMenuComponent],
})
export class AdminMobileMenuModule {}
