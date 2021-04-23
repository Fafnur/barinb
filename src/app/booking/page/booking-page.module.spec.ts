import { TestBed } from '@angular/core/testing';

import { BookingPageModule } from './booking-page.module';

describe('BookingPageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingPageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BookingPageModule).toBeTruthy();
  });
});
