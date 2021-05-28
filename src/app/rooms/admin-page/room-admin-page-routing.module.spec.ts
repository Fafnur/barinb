import { TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { AdminDesktopMenuComponent, AdminLayoutComponent, AdminMobileMenuComponent } from '@app/admin/layout';
import { ContainerComponent } from '@app/ui/container';
import { ColumnComponent, RowComponent } from '@app/ui/row';

import { AdminRoomsActionsComponent } from './components/admin-rooms-actions/admin-rooms-actions.component';
import { AdminRoomsListComponent } from './components/admin-rooms-list/admin-rooms-list.component';
import { AdminRoomsTableComponent } from './components/admin-rooms-table/admin-rooms-table.component';
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
        MockComponents(
          RowComponent,
          ColumnComponent,
          ContainerComponent,
          AdminDesktopMenuComponent,
          AdminMobileMenuComponent,
          AdminRoomsTableComponent,
          AdminRoomsActionsComponent,
          AdminRoomsListComponent
        ),
      ],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomAdminPageRoutingModule).toBeTruthy();
  });
});
