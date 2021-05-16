import { NgModule } from '@angular/core';

import { PersonFullNamePipe } from './person-full-name.pipe';

const pipes = [PersonFullNamePipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
})
export class PersonSharedModule {}
