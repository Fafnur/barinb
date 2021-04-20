import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [RouterModule, HeaderModule, FooterModule],
  declarations: [LayoutComponent, MainComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
