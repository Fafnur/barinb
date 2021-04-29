import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselSlideComponent } from './carousel-slide.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CarouselSlideComponent],
  exports: [CarouselSlideComponent],
})
export class CarouselSlideModule {}
