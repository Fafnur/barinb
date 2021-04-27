import { TestBed } from '@angular/core/testing';

import { BookingCardModule } from './booking-card.module';

describe('BookingCardModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingCardModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BookingCardModule).toBeTruthy();
  });
});
