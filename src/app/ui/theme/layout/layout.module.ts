import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MainModule } from './components/main/main.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [RouterModule, HeaderModule, MainModule, FooterModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
