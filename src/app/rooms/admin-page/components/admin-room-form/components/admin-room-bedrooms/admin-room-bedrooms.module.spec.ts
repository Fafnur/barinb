import { TestBed } from '@angular/core/testing';

import { AdminRoomBedroomsModule } from './admin-room-bedrooms.module';

describe('AdminRoomBedroomsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomBedroomsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomBedroomsModule).toBeTruthy();
  });
});
