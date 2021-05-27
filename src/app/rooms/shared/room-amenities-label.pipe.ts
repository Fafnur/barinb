import { Pipe, PipeTransform } from '@angular/core';

import { ROOM_AMENITIES_LABELS, RoomAmenities } from '@app/rooms/common';

@Pipe({
  name: 'roomAmenitiesLabel',
})
export class RoomAmenitiesLabelPipe implements PipeTransform {
  transform(roomAmenities: RoomAmenities): string {
    return ROOM_AMENITIES_LABELS[roomAmenities] ?? roomAmenities;
  }
}
