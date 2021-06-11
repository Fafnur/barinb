import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MockModule } from 'ng-mocks';

import { NumeralSharedModule } from '@app/core/numerals/shared';
import { ROOM_EXTENDED_STUB } from '@app/rooms/manager';

import { RoomBookingFormModule } from './components/room-booking-form/room-booking-form.module';
import { RoomBookingPriceModule } from './components/room-booking-price/room-booking-price.module';
import { RoomBookingCardComponent } from './room-booking-card.component';
import { RoomBookingCardComponentPo } from './room-booking-card.po';

@Component({
  template: `<app-room-booking-card [room]="room"></app-room-booking-card>`,
})
export class WrapperComponent {
  room = ROOM_EXTENDED_STUB;
}

describe('RoomBookingCardComponent', () => {
  let pageObject: RoomBookingCardComponentPo;
  let fixtureWrapper: ComponentFixture<RoomBookingCardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatButtonModule, NumeralSharedModule, MockModule(RoomBookingFormModule), MockModule(RoomBookingPriceModule)],
        declarations: [RoomBookingCardComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new RoomBookingCardComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show form and price', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.roomBookingCard).toBeTruthy();
    expect(pageObject.roomBookingForm).toBeTruthy();
    expect(pageObject.roomBookingRoomPrice).toBeTruthy();
    expect(pageObject.roomBookingPriceText).toBe('2,500 ₽ / ночь');
  });
});
