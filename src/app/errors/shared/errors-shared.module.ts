import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@app/core/navigation/shared';
import { ContainerModule } from '@app/ui/container';

import { ErrorApplicationComponent } from './components/error-application/error-application.component';
import { ErrorApplicationModule } from './components/error-application/error-application.module';
import { ErrorHintComponent } from './components/error-hint/error-hint.component';
import { ErrorHintModule } from './components/error-hint/error-hint.module';
import { ErrorLinksComponent } from './components/error-links/error-links.component';
import { ErrorLogoComponent } from './components/error-logo/error-logo.component';
import { ErrorStatusComponent } from './components/error-status/error-status.component';
import { ErrorTitleComponent } from './components/error-title/error-title.component';

const components = [ErrorLogoComponent, ErrorStatusComponent, ErrorTitleComponent, ErrorLinksComponent];

@NgModule({
  imports: [CommonModule, RouterModule, ContainerModule, NavigationSharedModule, MatButtonModule, ErrorApplicationModule, ErrorHintModule],
  declarations: [...components],
  exports: [...components, ErrorHintComponent, ErrorApplicationComponent],
})
export class ErrorsSharedModule {}
