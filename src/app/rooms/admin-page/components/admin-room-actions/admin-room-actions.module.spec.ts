import { TestBed } from '@angular/core/testing';

import { AdminRoomActionsModule } from './admin-room-actions.module';

describe('AdminRoomEditDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomActionsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomActionsModule).toBeTruthy();
  });
});
