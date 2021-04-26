import { TestBed } from '@angular/core/testing';

import { BookingMapModule } from './booking-map.module';

describe('BookingMapModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingMapModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BookingMapModule).toBeTruthy();
  });
});
