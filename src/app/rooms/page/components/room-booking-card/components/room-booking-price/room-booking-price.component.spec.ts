import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockPipes } from 'ng-mocks';
import { of } from 'rxjs';

import { BookingService } from '@app/booking/service';
import { NumeralToWordPipe } from '@app/core/numerals/shared';

import { RoomBookingPriceComponent } from './room-booking-price.component';
import { RoomBookingPriceService } from './room-booking-price.service';

describe('RoomBookingPriceComponent', () => {
  let component: RoomBookingPriceComponent;
  let fixture: ComponentFixture<RoomBookingPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomBookingPriceComponent, MockPipes(NumeralToWordPipe)],
      providers: [
        {
          provide: BookingService,
          useValue: {
            bookingDetails$: of(),
          } as Partial<BookingService>,
        },
        {
          provide: RoomBookingPriceService,
          useValue: {
            calculate: jest.fn(() => ({ cleaning: 0, days: 0, fee: 0, rent: 0, total: 0 })),
          } as Partial<RoomBookingPriceService>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBookingPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
