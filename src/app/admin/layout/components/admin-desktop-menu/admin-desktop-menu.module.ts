import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminMenuModule } from '@app/admin/menu';
import { NavigationSharedModule } from '@app/core/navigation/shared';

import { AdminDesktopMenuComponent } from './admin-desktop-menu.component';

@NgModule({
  imports: [CommonModule, RouterModule, AdminMenuModule, NavigationSharedModule],
  declarations: [AdminDesktopMenuComponent],
  exports: [AdminDesktopMenuComponent],
})
export class AdminDesktopMenuModule {}
