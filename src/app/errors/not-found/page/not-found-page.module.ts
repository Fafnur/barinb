import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorsSharedModule } from '@app/errors/shared';

import { NotFoundPageComponent } from './not-found-page.component';
import { NotFoundPageRoutingModule } from './not-found-page-routing.module';

@NgModule({
  imports: [CommonModule, NotFoundPageRoutingModule, ErrorsSharedModule],
  declarations: [NotFoundPageComponent],
})
export class NotFoundPageModule {}
