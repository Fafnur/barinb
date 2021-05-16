import { TestBed } from '@angular/core/testing';

import { AdminRoomPersonModule } from './admin-room-person.module';

describe('AdminRoomGuestsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomPersonModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomPersonModule).toBeTruthy();
  });
});
