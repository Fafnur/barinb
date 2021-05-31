import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { FormsSharedModule } from '@app/core/forms/shared';
import { GridModule } from '@app/ui/grid';

import { AdminRoomFormComponent } from './admin-room-form.component';
import { AdminRoomAmenitiesModule } from './components/admin-room-amenities/admin-room-amenities.module';
import { AdminRoomBathroomsModule } from './components/admin-room-bathrooms/admin-room-bathrooms.module';
import { AdminRoomBedroomsModule } from './components/admin-room-bedrooms/admin-room-bedrooms.module';
import { AdminRoomBedsModule } from './components/admin-room-beds/admin-room-beds.module';
import { AdminRoomBuildingModule } from './components/admin-room-building/admin-room-building.module';
import { AdminRoomDescriptionModule } from './components/admin-room-description/admin-room-description.module';
import { AdminRoomGuestsModule } from './components/admin-room-guests/admin-room-guests.module';
import { AdminRoomPersonModule } from './components/admin-room-person/admin-room-person.module';
import { AdminRoomPhotosModule } from './components/admin-room-photos/admin-room-photos.module';
import { AdminRoomPriceModule } from './components/admin-room-price/admin-room-price.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    AdminRoomAmenitiesModule,
    AdminRoomBathroomsModule,
    AdminRoomBedroomsModule,
    AdminRoomBedsModule,
    AdminRoomBuildingModule,
    AdminRoomDescriptionModule,
    AdminRoomGuestsModule,
    AdminRoomPhotosModule,
    AdminRoomPriceModule,
    AdminRoomPersonModule,
    FormsSharedModule,
    GridModule,
  ],
  declarations: [AdminRoomFormComponent],
  exports: [AdminRoomFormComponent],
})
export class AdminRoomFormModule {}
