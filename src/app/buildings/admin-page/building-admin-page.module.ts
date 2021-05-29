import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminLayoutModule } from '@app/admin/layout';
import { BuildingManagerModule } from '@app/buildings/manager';

import { AppCommonModule } from '../../app-common.module';
import { BuildingAdminPageComponent } from './building-admin-page.component';
import { BuildingAdminPageRoutingModule } from './building-admin-page-routing.module';
import { AdminBuildingsActionsModule } from './components/admin-buildings-actions/admin-buildings-actions.module';
import { AdminBuildingsListModule } from './components/admin-buildings-list/admin-buildings-list.module';
import { AdminBuildingsTableModule } from './components/admin-buildings-table/admin-buildings-table.module';

@NgModule({
  imports: [
    CommonModule,
    BuildingAdminPageRoutingModule,
    AdminLayoutModule,
    CommonModule,
    AdminLayoutModule,
    AppCommonModule,
    BuildingManagerModule,
    AdminBuildingsActionsModule,
    AdminBuildingsListModule,
    AdminBuildingsTableModule,
  ],
  declarations: [BuildingAdminPageComponent],
})
export class BuildingAdminPageModule {}
