import { NgModule } from '@angular/core';

import { ErrorApplicationComponent } from './components/error-application/error-application.component';
import { ErrorApplicationModule } from './components/error-application/error-application.module';
import { ErrorHintComponent } from './components/error-hint/error-hint.component';
import { ErrorHintModule } from './components/error-hint/error-hint.module';
import { ErrorLinksComponent } from './components/error-links/error-links.component';
import { ErrorLinksModule } from './components/error-links/error-links.module';
import { ErrorLogoComponent } from './components/error-logo/error-logo.component';
import { ErrorLogoModule } from './components/error-logo/error-logo.module';
import { ErrorStatusComponent } from './components/error-status/error-status.component';
import { ErrorTitleComponent } from './components/error-title/error-title.component';

const components = [ErrorStatusComponent, ErrorTitleComponent];

@NgModule({
  imports: [ErrorLinksModule, ErrorApplicationModule, ErrorHintModule, ErrorLinksModule, ErrorLogoModule],
  declarations: [...components],
  exports: [...components, ErrorLogoComponent, ErrorHintComponent, ErrorApplicationComponent, ErrorLinksComponent],
})
export class ErrorsSharedModule {}
