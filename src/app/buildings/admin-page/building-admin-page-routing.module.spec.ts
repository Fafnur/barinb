import { TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { AdminDesktopMenuComponent, AdminLayoutComponent, AdminMobileMenuComponent } from '@app/admin/layout';
import { ContainerComponent } from '@app/ui/container';
import { ColumnComponent, RowComponent } from '@app/ui/grid';

import { BuildingAdminPageComponent } from './building-admin-page.component';
import { BuildingAdminPageRoutingModule } from './building-admin-page-routing.module';
import { AdminBuildingsActionsComponent } from './components/admin-buildings-actions/admin-buildings-actions.component';
import { AdminBuildingsListComponent } from './components/admin-buildings-list/admin-buildings-list.component';
import { AdminBuildingsTableComponent } from './components/admin-buildings-table/admin-buildings-table.component';

describe('BuildingAdminPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingAdminPageRoutingModule],
      declarations: [
        // TODO: Fix jest imports.
        BuildingAdminPageComponent,
        AdminLayoutComponent,
        MockComponents(
          RowComponent,
          ColumnComponent,
          AdminDesktopMenuComponent,
          AdminMobileMenuComponent,
          ContainerComponent,
          AdminBuildingsActionsComponent,
          AdminBuildingsTableComponent,
          AdminBuildingsListComponent
        ),
      ],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BuildingAdminPageRoutingModule).toBeTruthy();
  });
});
