import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { BookingSharedModule } from '@app/booking/shared';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { CarouselModule } from '@app/ui/carousel';
import { GridModule } from '@app/ui/grid';

import { BookingPortletComponent } from './booking-portlet.component';

@NgModule({
  imports: [CommonModule, CarouselModule, BookingSharedModule, MatButtonModule, RouterModule, NavigationSharedModule, GridModule],
  declarations: [BookingPortletComponent],
  exports: [BookingPortletComponent],
})
export class BookingPortletModule {}
