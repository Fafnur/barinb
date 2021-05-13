import { TestBed } from '@angular/core/testing';

import { AdminRoomsActionsModule } from './admin-rooms-actions.module';

describe('AdminRoomEditDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomsActionsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomsActionsModule).toBeTruthy();
  });
});
