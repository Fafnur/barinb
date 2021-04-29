import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CarouselNavsComponent } from './carousel-navs.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [CarouselNavsComponent],
  exports: [CarouselNavsComponent],
})
export class CarouselNavsModule {}
