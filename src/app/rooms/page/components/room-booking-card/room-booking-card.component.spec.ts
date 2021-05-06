import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingCardComponent } from './room-booking-card.component';

describe('RoomBookingCardComponent', () => {
  let component: RoomBookingCardComponent;
  let fixture: ComponentFixture<RoomBookingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomBookingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBookingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
