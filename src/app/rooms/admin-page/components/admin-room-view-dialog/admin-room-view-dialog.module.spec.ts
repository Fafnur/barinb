import { TestBed } from '@angular/core/testing';

import { AdminRoomViewDialogModule } from './admin-room-view-dialog.module';

describe('AdminRoomEditDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomViewDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomViewDialogModule).toBeTruthy();
  });
});
