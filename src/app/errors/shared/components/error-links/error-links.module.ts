import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationSharedModule } from '@app/core/navigation/shared';

import { ErrorLinksComponent } from './error-links.component';

@NgModule({
  imports: [RouterModule, NavigationSharedModule],
  declarations: [ErrorLinksComponent],
  exports: [ErrorLinksComponent],
})
export class ErrorLinksModule {}
