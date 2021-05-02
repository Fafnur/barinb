import { NgModule } from '@angular/core';

import { BookingVariantFirstImagePipe } from './booking-variant-first-image.pipe';
import { BookingVariantImagesPipe } from './booking-variant-images.pipe';

const pipes = [BookingVariantImagesPipe, BookingVariantFirstImagePipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
})
export class BookingSharedModule {}
