import { TestBed } from '@angular/core/testing';

import { AdminRoomValueModule } from './admin-room-value.module';

describe('AdminRoomLabelModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomValueModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomValueModule).toBeTruthy();
  });
});
