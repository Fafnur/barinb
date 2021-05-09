import { NgModule } from '@angular/core';

import { NumeralToWordPipe } from './numeral-to-word.pipe';

const pipes = [NumeralToWordPipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
})
export class NumeralSharedModule {}
