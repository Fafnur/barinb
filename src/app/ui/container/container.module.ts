import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerComponent } from './container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ContainerComponent],
  exports: [ContainerComponent],
})
export class ContainerModule {}
