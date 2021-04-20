import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderModule } from './components/header/header.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [CommonModule, RouterModule, HeaderModule],
  declarations: [LayoutComponent, FooterComponent, MainComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
