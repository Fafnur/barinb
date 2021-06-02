import { NgModule } from '@angular/core';

import { BackgroundImagePipe } from './background-image.pipe';

const pipes = [BackgroundImagePipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
})
export class SharedModule {}
