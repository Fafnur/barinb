import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RoomField } from '@app/rooms/common';

export const ROOM_FORM_CONFIG: Record<string, any> = {
  [RoomField.Person]: [null, [Validators.required]],
  [RoomField.Building]: [null, [Validators.required]],
  [RoomField.Price]: [null, [Validators.required, Validators.min(0)]],
  [RoomField.Description]: [null, [Validators.required, Validators.minLength(1)]],
  [RoomField.Guests]: [null, [Validators.required, Validators.min(0)]],
  [RoomField.Bedrooms]: [null, [Validators.required, Validators.min(0)]],
  [RoomField.Beds]: [null, [Validators.required, Validators.min(0)]],
  [RoomField.Bathrooms]: [null, [Validators.required, Validators.min(0)]],
  [RoomField.Photos]: [null, [Validators.required]],
  [RoomField.Amenities]: [null, []],
};

export function createRoomForm(form: FormGroup): void {
  for (const [key, value] of Object.entries(ROOM_FORM_CONFIG)) {
    form.addControl(key, new FormControl(value[0], value[1]));
  }
}
