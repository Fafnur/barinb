import { TestBed } from '@angular/core/testing';

import { AdminRoomPriceModule } from './admin-room-price.module';

describe('AdminRoomPriceModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomPriceModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomPriceModule).toBeTruthy();
  });
});
