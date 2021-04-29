import { NgModule } from '@angular/core';

import { BookingVariantImagesPipe } from './booking-variant-images.pipe';

@NgModule({
  declarations: [BookingVariantImagesPipe],
  exports: [BookingVariantImagesPipe],
})
export class BookingSharedModule {}
