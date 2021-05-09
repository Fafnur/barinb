import { NgModule } from '@angular/core';

import { ExtractFormControlPipe } from './extract-form-control.pipe';
import { ExtractFormGroupPipe } from './extract-form-group.pipe';

const pipes = [ExtractFormControlPipe, ExtractFormGroupPipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
})
export class FormsSharedModule {}
