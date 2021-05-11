import { TestBed } from '@angular/core/testing';

import { AdminRoomGuestsModule } from './admin-room-guests.module';

describe('AdminRoomGuestsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomGuestsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomGuestsModule).toBeTruthy();
  });
});
