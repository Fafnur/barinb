import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { RootStoreModule } from '@app/core/store/root';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppLocaleModule } from './app-locale.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppLocaleModule,
    HttpClientModule,
    RootStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument({ logOnly: environment.production }) : [],
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
