import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { ErrorApplicationComponent } from '@app/errors/shared';
import { ContainerModule } from '@app/ui/container';

@NgModule({
  imports: [RouterModule, ContainerModule, MatButtonModule],
  declarations: [ErrorApplicationComponent],
  exports: [ErrorApplicationComponent],
})
export class ErrorApplicationModule {}
