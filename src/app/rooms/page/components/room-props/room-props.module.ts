import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NumeralSharedModule } from '@app/core/numerals/shared';

import { RoomPropsComponent } from './room-props.component';

@NgModule({
  imports: [CommonModule, NumeralSharedModule],
  declarations: [RoomPropsComponent],
  exports: [RoomPropsComponent],
})
export class RoomPropsModule {}
