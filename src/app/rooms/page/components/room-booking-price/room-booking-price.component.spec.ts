import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingPriceComponent } from './room-booking-price.component';

describe('RoomBookingPriceComponent', () => {
  let component: RoomBookingPriceComponent;
  let fixture: ComponentFixture<RoomBookingPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomBookingPriceComponent ]
    })
    .compileComponents();
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
