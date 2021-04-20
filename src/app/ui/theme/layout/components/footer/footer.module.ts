import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { IconsModule } from '@app/ui/icons';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [IconsModule, MatButtonModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
