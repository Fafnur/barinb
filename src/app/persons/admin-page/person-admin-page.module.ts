import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminLayoutModule } from '@app/admin/layout';

import { PersonAdminPageComponent } from './person-admin-page.component';
import { PersonAdminPageRoutingModule } from './person-admin-page-routing.module';

@NgModule({
  imports: [CommonModule, PersonAdminPageRoutingModule, AdminLayoutModule],
  declarations: [PersonAdminPageComponent],
})
export class PersonAdminPageModule {}
