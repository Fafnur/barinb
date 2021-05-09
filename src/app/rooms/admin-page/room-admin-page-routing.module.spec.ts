import { TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { AdminDesktopMenuComponent, AdminLayoutComponent, AdminMobileMenuComponent } from '@app/admin/layout';
import { ColumnComponent, RowComponent } from '@app/ui/row';

import { RoomAdminPageComponent } from './room-admin-page.component';
import { RoomAdminPageRoutingModule } from './room-admin-page-routing.module';

describe('RoomAdminPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomAdminPageRoutingModule],
      declarations: [
        // TODO: Fix jest imports.
        RoomAdminPageComponent,
        AdminLayoutComponent,
        MockComponents(RowComponent, ColumnComponent, AdminDesktopMenuComponent, AdminMobileMenuComponent),
      ],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomAdminPageRoutingModule).toBeTruthy();
  });
});
