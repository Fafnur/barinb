import { TestBed } from '@angular/core/testing';

import { AdminRoomCreateDialogModule } from './admin-room-create-dialog.module';

describe('AdminRoomCreateDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomCreateDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomCreateDialogModule).toBeTruthy();
  });
});
