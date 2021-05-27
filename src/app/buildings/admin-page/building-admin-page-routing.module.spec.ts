import { TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { AdminDesktopMenuComponent, AdminLayoutComponent, AdminMobileMenuComponent } from '@app/admin/layout';
import { ContainerComponent } from '@app/ui/container';
import { ColumnComponent, RowComponent } from '@app/ui/row';

import { BuildingAdminPageComponent } from './building-admin-page.component';
import { BuildingAdminPageRoutingModule } from './building-admin-page-routing.module';

describe('BuildingAdminPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingAdminPageRoutingModule],
      declarations: [
        // TODO: Fix jest imports.
        BuildingAdminPageComponent,
        AdminLayoutComponent,
        MockComponents(RowComponent, ColumnComponent, AdminDesktopMenuComponent, AdminMobileMenuComponent, ContainerComponent),
      ],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BuildingAdminPageRoutingModule).toBeTruthy();
  });
});
