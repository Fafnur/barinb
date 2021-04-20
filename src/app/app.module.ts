import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppLocaleModule } from './app-locale.module';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './ui/theme/layout/layout.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AppLocaleModule, LayoutModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
