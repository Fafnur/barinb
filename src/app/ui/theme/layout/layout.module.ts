import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, MainComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
