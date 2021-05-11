import { NgModule } from '@angular/core';

import { BuildingServiceModule } from '@app/buildings/service';
import { BuildingStateModule } from '@app/buildings/state';
import { PersonServiceModule } from '@app/persons/service';
import { PersonStateModule } from '@app/persons/state';
import { RoomServiceModule } from '@app/rooms/service';
import { RoomStateModule } from '@app/rooms/state';

@NgModule({
  imports: [RoomServiceModule, RoomStateModule, BuildingServiceModule, BuildingStateModule, PersonServiceModule, PersonStateModule],
})
export class AppCommonModule {}
