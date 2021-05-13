import { TestBed } from '@angular/core/testing';

import { AdminRoomRemoveDialogModule } from './admin-room-remove-dialog.module';

describe('AdminRoomRemoveDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomRemoveDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomRemoveDialogModule).toBeTruthy();
  });
});
