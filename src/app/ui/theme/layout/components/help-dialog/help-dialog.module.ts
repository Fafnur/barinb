import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

import { HelpDialogComponent } from './help-dialog.component';

@NgModule({
  imports: [RouterModule, MatDialogModule, MatButtonModule],
  declarations: [HelpDialogComponent],
  exports: [HelpDialogComponent],
})
export class HelpDialogModule {}
