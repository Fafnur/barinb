import { TestBed } from '@angular/core/testing';

import { AdminRoomBedsModule } from './admin-room-beds.module';

describe('AdminRoomBedsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomBedsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomBedsModule).toBeTruthy();
  });
});
