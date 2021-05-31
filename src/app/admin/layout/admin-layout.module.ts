import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContainerModule } from '@app/ui/container';
import { GridModule } from '@app/ui/grid';

import { AdminLayoutComponent } from './admin-layout.component';
import { AdminDesktopMenuModule } from './components/admin-desktop-menu/admin-desktop-menu.module';
import { AdminMobileMenuModule } from './components/admin-mobile-menu/admin-mobile-menu.module';

@NgModule({
  imports: [CommonModule, RouterModule, AdminMobileMenuModule, AdminDesktopMenuModule, GridModule, ContainerModule],
  declarations: [AdminLayoutComponent],
  exports: [AdminLayoutComponent],
})
export class AdminLayoutModule {}
