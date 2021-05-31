import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { FormsSharedModule } from '@app/core/forms/shared';
import { GridModule } from '@app/ui/grid';

import { AdminPersonFormComponent } from './admin-person-form.component';
import { AdminPersonAvatarModule } from './components/admin-person-avatar/admin-person-avatar.module';
import { AdminPersonBuildingsModule } from './components/admin-person-buildings/admin-person-buildings.module';
import { AdminPersonFirstnameModule } from './components/admin-person-firstname/admin-person-firstname.module';
import { AdminPersonLastnameModule } from './components/admin-person-lastname/admin-person-lastname.module';
import { AdminPersonMiddlenameModule } from './components/admin-person-middlename/admin-person-middlename.module';
import { AdminPersonPhoneModule } from './components/admin-person-phone/admin-person-phone.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    AdminPersonLastnameModule,
    AdminPersonMiddlenameModule,
    AdminPersonPhoneModule,
    AdminPersonFirstnameModule,
    AdminPersonAvatarModule,
    AdminPersonBuildingsModule,
    FormsSharedModule,
    GridModule,
  ],
  declarations: [AdminPersonFormComponent],
  exports: [AdminPersonFormComponent],
})
export class AdminPersonFormModule {}
