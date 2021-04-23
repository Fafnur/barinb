import { TestBed } from '@angular/core/testing';

import { BookingPageRoutingModule } from './booking-page-routing.module';

describe('BookingPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingPageRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BookingPageRoutingModule).toBeTruthy();
  });
});
