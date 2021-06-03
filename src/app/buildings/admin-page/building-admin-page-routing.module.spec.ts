import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { AdminLayoutComponent, AdminLayoutModule } from '@app/admin/layout';
import { ContainerModule } from '@app/ui/container';
import { GridModule } from '@app/ui/grid';

import { AdminDesktopMenuModule } from '../../admin/layout/components/admin-desktop-menu/admin-desktop-menu.module';
import { AdminMobileMenuModule } from '../../admin/layout/components/admin-mobile-menu/admin-mobile-menu.module';
import { BuildingAdminPageComponent } from './building-admin-page.component';
import { BuildingAdminPageRoutingModule } from './building-admin-page-routing.module';
import { AdminBuildingsActionsModule } from './components/admin-buildings-actions/admin-buildings-actions.module';
import { AdminBuildingsListModule } from './components/admin-buildings-list/admin-buildings-list.module';
import { AdminBuildingsTableModule } from './components/admin-buildings-table/admin-buildings-table.module';

describe('BuildingAdminPageRoutingModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          BuildingAdminPageRoutingModule,
          MockModule(GridModule),
          MockModule(AdminLayoutModule),
          MockModule(ContainerModule),
          MockModule(AdminBuildingsActionsModule),
          MockModule(AdminBuildingsTableModule),
          MockModule(AdminBuildingsListModule),
          MockModule(AdminDesktopMenuModule),
          MockModule(AdminMobileMenuModule),
        ],
        declarations: [
          // TODO: Fix jest imports.
          BuildingAdminPageComponent,
          AdminLayoutComponent,
        ],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(BuildingAdminPageRoutingModule).toBeTruthy();
  });
});
