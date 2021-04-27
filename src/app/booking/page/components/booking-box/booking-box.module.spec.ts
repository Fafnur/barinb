import { TestBed } from '@angular/core/testing';

import { BookingBoxModule } from './booking-box.module';

describe('BookingBoxModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingBoxModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BookingBoxModule).toBeTruthy();
  });
});
