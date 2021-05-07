import { TestBed } from '@angular/core/testing';

import { AdminLayoutComponent } from '@app/admin/layout';

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
      ],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomAdminPageRoutingModule).toBeTruthy();
  });
});
