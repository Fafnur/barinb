import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButton } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MockComponents, MockPipes } from 'ng-mocks';
import { of } from 'rxjs';

import { BookingService } from '@app/booking/service';
import { ExtractFormControlPipe, ExtractFormGroupPipe } from '@app/forms/shared';

import { RoomBookingDateComponent } from './components/room-booking-date/room-booking-date.component';
import { RoomBookingGuestComponent } from './components/room-booking-guest/room-booking-guest.component';
import { RoomBookingFormComponent } from './room-booking-form.component';

describe('RoomBookingFormComponent', () => {
  let component: RoomBookingFormComponent;
  let fixture: ComponentFixture<RoomBookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [
        RoomBookingFormComponent,
        MockPipes(ExtractFormGroupPipe, ExtractFormControlPipe),
        MockComponents(RoomBookingDateComponent, RoomBookingGuestComponent, MatButton),
      ],
      providers: [
        {
          provide: BookingService,
          useValue: {
            bookingDetails$: of(),
          } as Partial<BookingService>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
