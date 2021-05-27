import { TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { AdminDesktopMenuComponent, AdminLayoutComponent, AdminMobileMenuComponent } from '@app/admin/layout';
import { ContainerComponent } from '@app/ui/container';
import { ColumnComponent, RowComponent } from '@app/ui/row';

import { PersonAdminPageComponent } from './person-admin-page.component';
import { PersonAdminPageRoutingModule } from './person-admin-page-routing.module';

describe('PersonAdminPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonAdminPageRoutingModule],
      declarations: [
        // TODO: Fix jest imports.
        PersonAdminPageComponent,
        AdminLayoutComponent,
        MockComponents(RowComponent, ColumnComponent, AdminDesktopMenuComponent, AdminMobileMenuComponent, ContainerComponent),
      ],
    }).compileComponents();
  });

  it('should create', () => {
    expect(PersonAdminPageRoutingModule).toBeTruthy();
  });
});
