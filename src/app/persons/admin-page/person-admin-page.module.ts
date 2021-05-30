import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminLayoutModule } from '@app/admin/layout';
import { PersonManagerModule } from '@app/persons/manager';

import { AppCommonModule } from '../../app-common.module';
import { AdminPersonsActionsModule } from './components/admin-persons-actions/admin-persons-actions.module';
import { AdminPersonsListModule } from './components/admin-persons-list/admin-persons-list.module';
import { AdminPersonsTableModule } from './components/admin-persons-table/admin-persons-table.module';
import { PersonAdminPageComponent } from './person-admin-page.component';
import { PersonAdminPageRoutingModule } from './person-admin-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PersonAdminPageRoutingModule,
    AppCommonModule,
    PersonManagerModule,
    AdminLayoutModule,
    AdminPersonsListModule,
    AdminPersonsTableModule,
    AdminPersonsActionsModule,
  ],
  declarations: [PersonAdminPageComponent],
})
export class PersonAdminPageModule {}
