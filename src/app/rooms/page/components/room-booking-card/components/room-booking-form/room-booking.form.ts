import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BookingField } from '@app/booking/common';

export function getRoomBookingForm(): FormGroup {
  return new FormGroup({
    [BookingField.Period]: new FormGroup({
      [BookingField.PeriodStart]: new FormControl(null, [Validators.required]),
      [BookingField.PeriodEnd]: new FormControl(null, [Validators.required]),
    }),
    [BookingField.Guests]: new FormControl(null, [Validators.required, Validators.min(1)]),
  });
}
