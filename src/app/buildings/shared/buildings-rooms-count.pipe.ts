import { Pipe, PipeTransform } from '@angular/core';

import { Building } from '@app/buildings/common';

@Pipe({
  name: 'buildingsRoomsCount',
})
export class BuildingsRoomsCountPipe implements PipeTransform {
  transform(buildings: Building[]): number {
    return buildings.reduce((accumulator, building) => accumulator + building.rooms.length, 0);
  }
}
