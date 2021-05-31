import { NgModule } from '@angular/core';

import { ColumnComponent } from './column/column.component';
import { ColumnModule } from './column/column.module';
import { RowComponent } from './row/row.component';
import { RowModule } from './row/row.module';

@NgModule({
  imports: [ColumnModule, RowModule],
  exports: [RowComponent, ColumnComponent],
})
export class GridModule {}
