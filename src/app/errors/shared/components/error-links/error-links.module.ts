import { NgModule } from '@angular/core';

import { NavigationSharedModule } from '@app/core/navigation/shared';

import { ErrorLinksComponent } from './error-links.component';

@NgModule({
  imports: [NavigationSharedModule],
  declarations: [ErrorLinksComponent],
  exports: [ErrorLinksComponent],
})
export class ErrorLinksModule {}
