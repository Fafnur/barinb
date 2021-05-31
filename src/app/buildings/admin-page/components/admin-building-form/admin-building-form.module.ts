import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { FormsSharedModule } from '@app/core/forms/shared';
import { GridModule } from '@app/ui/grid';

import { AdminBuildingFormComponent } from './admin-building-form.component';
import { AdminBuildingAddressModule } from './components/admin-building-address/admin-building-address.module';
import { AdminBuildingCityModule } from './components/admin-building-city/admin-building-city.module';
import { AdminBuildingLatModule } from './components/admin-building-lat/admin-building-lat.module';
import { AdminBuildingLngModule } from './components/admin-building-lng/admin-building-lng.module';
import { AdminBuildingNameModule } from './components/admin-building-name/admin-building-name.module';
import { AdminBuildingPersonModule } from './components/admin-building-person/admin-building-person.module';
import { AdminBuildingRoomsModule } from './components/admin-building-rooms/admin-building-rooms.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    AdminBuildingCityModule,
    AdminBuildingAddressModule,
    AdminBuildingLatModule,
    AdminBuildingNameModule,
    AdminBuildingLngModule,
    AdminBuildingRoomsModule,
    AdminBuildingPersonModule,
    FormsSharedModule,
    GridModule,
  ],
  declarations: [AdminBuildingFormComponent],
  exports: [AdminBuildingFormComponent],
})
export class AdminBuildingFormModule {}
