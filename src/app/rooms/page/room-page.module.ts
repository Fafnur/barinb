import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BuildingServiceModule } from '@app/buildings/service';
import { BuildingStateModule } from '@app/buildings/state';
import { PersonServiceModule } from '@app/persons/service';
import { PersonStateModule } from '@app/persons/state';
import { RoomManagerModule } from '@app/rooms/manager';
import { RoomServiceModule } from '@app/rooms/service';
import { RoomStateModule } from '@app/rooms/state';
import { ContainerModule } from '@app/ui/container';

import { RoomDetailsModule } from './components/room-details/room-details.module';
import { RoomFeaturesModule } from './components/room-features/room-features.module';
import { RoomHeaderModule } from './components/room-header/room-header.module';
import { RoomPersonModule } from './components/room-person/room-person.module';
import { RoomPhotoModule } from './components/room-photo/room-photo.module';
import { RoomPropsModule } from './components/room-props/room-props.module';
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
    MatIconModule,
    MatButtonModule,
    RoomPropsModule,
    RoomPhotoModule,
    RoomHeaderModule,
    RoomDetailsModule,
    RoomPersonModule,
    RoomFeaturesModule,
  ],
  declarations: [RoomPageComponent],
})
export class RoomPageModule {}
