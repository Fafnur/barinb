import { TestBed } from '@angular/core/testing';

import { BookingPortletModule } from './booking-portlet.module';

describe('BookingPortletModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingPortletModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BookingPortletModule).toBeTruthy();
  });
});
