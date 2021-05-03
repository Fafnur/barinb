import { NgModule } from '@angular/core';

import { NavPathPipe } from './nav-path.pipe';

const pipes = [NavPathPipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
})
export class NavigationSharedModule {}
