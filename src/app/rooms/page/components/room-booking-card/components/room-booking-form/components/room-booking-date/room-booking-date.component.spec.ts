import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingDateComponent } from './room-booking-date.component';

describe('RoomBookingDateComponent', () => {
  let component: RoomBookingDateComponent;
  let fixture: ComponentFixture<RoomBookingDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomBookingDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBookingDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
