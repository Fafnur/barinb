import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { HelpDialogModule } from '../help-dialog/help-dialog.module';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, HelpDialogModule, MatDialogModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
