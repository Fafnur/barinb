import { NgModule } from '@angular/core';

import { AdminViewGroupComponent } from './components/admin-view-group/admin-view-group.component';
import { AdminViewGroupModule } from './components/admin-view-group/admin-view-group.module';
import { AdminViewLabelComponent } from './components/admin-view-label/admin-view-label.component';
import { AdminViewLabelModule } from './components/admin-view-label/admin-view-label.module';
import { AdminViewValueComponent } from './components/admin-view-value/admin-view-value.component';
import { AdminViewValueModule } from './components/admin-view-value/admin-view-value.module';

@NgModule({
  imports: [AdminViewGroupModule, AdminViewValueModule, AdminViewLabelModule],
  exports: [AdminViewGroupComponent, AdminViewLabelComponent, AdminViewValueComponent],
})
export class AdminViewSharedModule {}
