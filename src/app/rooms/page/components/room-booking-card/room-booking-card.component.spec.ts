import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { RoomBookingFormComponent } from './components/room-booking-form/room-booking-form.component';
import { RoomBookingPriceComponent } from './components/room-booking-price/room-booking-price.component';
import { RoomBookingCardComponent } from './room-booking-card.component';

describe('RoomBookingCardComponent', () => {
  let component: RoomBookingCardComponent;
  let fixture: ComponentFixture<RoomBookingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomBookingCardComponent, MockComponents(RoomBookingPriceComponent, RoomBookingFormComponent)],
    }).compileComponents();
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
