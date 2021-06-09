import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@app/core/navigation/shared';

import { ErrorLogoComponent } from './error-logo.component';

@NgModule({
  imports: [RouterModule, NavigationSharedModule],
  declarations: [ErrorLogoComponent],
  exports: [ErrorLogoComponent],
})
export class ErrorLogoModule {}
