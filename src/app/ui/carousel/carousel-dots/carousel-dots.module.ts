import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselDotsComponent } from './carousel-dots.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CarouselDotsComponent],
  exports: [CarouselDotsComponent],
})
export class CarouselDotsModule {}
