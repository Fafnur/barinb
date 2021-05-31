import { TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { AdminLayoutComponent } from '@app/admin/layout';
import { ContainerModule } from '@app/ui/container';
import { GridModule } from '@app/ui/grid';

import { AdminDesktopMenuModule } from '../../admin/layout/components/admin-desktop-menu/admin-desktop-menu.module';
import { AdminMobileMenuModule } from '../../admin/layout/components/admin-mobile-menu/admin-mobile-menu.module';
import { AdminPersonsActionsModule } from './components/admin-persons-actions/admin-persons-actions.module';
import { AdminPersonsListModule } from './components/admin-persons-list/admin-persons-list.module';
import { AdminPersonsTableModule } from './components/admin-persons-table/admin-persons-table.module';
import { PersonAdminPageComponent } from './person-admin-page.component';
import { PersonAdminPageRoutingModule } from './person-admin-page-routing.module';

describe('PersonAdminPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PersonAdminPageRoutingModule,
        MockModule(AdminPersonsActionsModule),
        MockModule(AdminPersonsTableModule),
        MockModule(AdminPersonsListModule),
        MockModule(GridModule),
        MockModule(AdminDesktopMenuModule),
        MockModule(AdminMobileMenuModule),
        MockModule(ContainerModule),
      ],
      declarations: [
        // TODO: Fix jest imports.
        PersonAdminPageComponent,
        AdminLayoutComponent,
      ],
    }).compileComponents();
  });

  it('should create', () => {
    expect(PersonAdminPageRoutingModule).toBeTruthy();
  });
});
