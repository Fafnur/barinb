import { TestBed } from '@angular/core/testing';

import { RoomBookingDialogModule } from './room-booking-dialog.module';

describe('RoomBookingCardModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomBookingDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomBookingDialogModule).toBeTruthy();
  });
});
