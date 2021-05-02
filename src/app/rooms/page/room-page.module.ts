import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BuildingServiceModule } from '@app/buildings/service';
import { BuildingStateModule } from '@app/buildings/state';
import { PersonStateModule } from '@app/persons/state';
import { RoomServiceModule } from '@app/rooms/service';
import { RoomStateModule } from '@app/rooms/state';

import { RoomPageComponent } from './room-page.component';
import { RoomPageRoutingModule } from './room-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoomPageRoutingModule,
    RoomServiceModule,
    RoomStateModule,
    BuildingServiceModule,
    BuildingStateModule,
    PersonStateModule,
  ],
  declarations: [RoomPageComponent],
})
export class RoomPageModule {}
