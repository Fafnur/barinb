import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminLayoutModule } from '@app/admin/layout';

import { BuildingAdminPageComponent } from './building-admin-page.component';
import { BuildingAdminPageRoutingModule } from './building-admin-page-routing.module';

@NgModule({
  imports: [CommonModule, BuildingAdminPageRoutingModule, AdminLayoutModule],
  declarations: [BuildingAdminPageComponent],
})
export class BuildingAdminPageModule {}
