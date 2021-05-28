import { TestBed } from '@angular/core/testing';

import { AdminRoomCardModule } from './admin-room-card.module';

describe('AdminRoomCardModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomCardModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomCardModule).toBeTruthy();
  });
});
