import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselComponent } from './carousel.component';
import { CarouselDotsModule } from './carousel-dots/carousel-dots.module';
import { CarouselNavsModule } from './carousel-navs/carousel-navs.module';
import { CarouselSlideModule } from './carousel-slide/carousel-slide.module';

@NgModule({
  imports: [CommonModule, CarouselSlideModule, CarouselDotsModule, CarouselNavsModule],
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
})
export class CarouselModule {}
