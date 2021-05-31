import { TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { AdminLayoutComponent } from '@app/admin/layout';
import { ContainerModule } from '@app/ui/container';
import { GridModule } from '@app/ui/grid';

import { AdminDesktopMenuModule } from '../../admin/layout/components/admin-desktop-menu/admin-desktop-menu.module';
import { AdminMobileMenuModule } from '../../admin/layout/components/admin-mobile-menu/admin-mobile-menu.module';
import { AdminRoomsActionsModule } from './components/admin-rooms-actions/admin-rooms-actions.module';
import { AdminRoomsListModule } from './components/admin-rooms-list/admin-rooms-list.module';
import { AdminRoomsTableModule } from './components/admin-rooms-table/admin-rooms-table.module';
import { RoomAdminPageComponent } from './room-admin-page.component';
import { RoomAdminPageRoutingModule } from './room-admin-page-routing.module';

describe('RoomAdminPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RoomAdminPageRoutingModule,
        MockModule(GridModule),
        MockModule(ContainerModule),
        MockModule(AdminDesktopMenuModule),
        MockModule(AdminMobileMenuModule),
        MockModule(AdminRoomsTableModule),
        MockModule(AdminRoomsActionsModule),
        MockModule(AdminRoomsListModule),
      ],
      declarations: [
        // TODO: Fix jest imports.
        RoomAdminPageComponent,
        AdminLayoutComponent,
      ],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomAdminPageRoutingModule).toBeTruthy();
  });
});
