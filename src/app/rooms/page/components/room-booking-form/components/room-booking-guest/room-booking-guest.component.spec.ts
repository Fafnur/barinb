import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingGuestComponent } from './room-booking-guest.component';

describe('RoomBookingGuestComponent', () => {
  let component: RoomBookingGuestComponent;
  let fixture: ComponentFixture<RoomBookingGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomBookingGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBookingGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
