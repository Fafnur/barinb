import { TestBed } from '@angular/core/testing';

import { AdminRoomEditDialogModule } from './admin-room-edit-dialog.module';

describe('AdminRoomEditDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomEditDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomEditDialogModule).toBeTruthy();
  });
});
