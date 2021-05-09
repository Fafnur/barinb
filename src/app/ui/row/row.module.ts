import { NgModule } from '@angular/core';

import { ColumnComponent } from './column/column.component';
import { ColumnModule } from './column/column.module';
import { RowComponent } from './row.component';

@NgModule({
  imports: [ColumnModule],
  declarations: [RowComponent],
  exports: [RowComponent, ColumnComponent],
})
export class RowModule {}
