import { TestBed } from '@angular/core/testing';

import { BookingStateModule } from './booking-state.module';

describe('BookingStateModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingStateModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BookingStateModule).toBeTruthy();
  });
});
