import { TestBed } from '@angular/core/testing';

import { BookingServiceModule } from './booking-service.module';

describe('BookingServiceModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingServiceModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BookingServiceModule).toBeTruthy();
  });
});
