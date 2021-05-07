import { TestBed } from '@angular/core/testing';

import { RoomAdminPageModule } from './room-admin-page.module';

describe('RoomAdminPageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomAdminPageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomAdminPageModule).toBeTruthy();
  });
});
