import { TestBed } from '@angular/core/testing';

import { AdminRoomClearDialogModule } from './admin-room-clear-dialog.module';

describe('AdminRoomClearDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomClearDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomClearDialogModule).toBeTruthy();
  });
});
