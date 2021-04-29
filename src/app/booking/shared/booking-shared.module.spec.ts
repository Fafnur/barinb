import { TestBed } from '@angular/core/testing';

import { BookingSharedModule } from './booking-shared.module';

describe('BookingServiceModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingSharedModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BookingSharedModule).toBeTruthy();
  });
});
