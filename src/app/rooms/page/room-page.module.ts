import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BuildingServiceModule } from '@app/buildings/service';
import { BuildingStateModule } from '@app/buildings/state';
import { PersonServiceModule } from '@app/persons/service';
import { PersonStateModule } from '@app/persons/state';
import { RoomManagerModule } from '@app/rooms/manager';
import { RoomServiceModule } from '@app/rooms/service';
import { RoomStateModule } from '@app/rooms/state';
import { ContainerModule } from '@app/ui/container';

import { RoomPhotosModule } from './components/room-photos/room-photos.module';
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
    PersonServiceModule,
    PersonStateModule,
    RoomManagerModule,
    ContainerModule,
    RoomPhotosModule,
  ],
  declarations: [RoomPageComponent],
})
export class RoomPageModule {}
