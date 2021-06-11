import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ROOM_EXTENDED_STUB } from '@app/rooms/manager';

import { RoomBookingGuestComponent } from './room-booking-guest.component';
import { RoomBookingGuestsComponentPo } from './room-booking-guest.po';

@Component({
  template: `<app-room-booking-guest [control]="control" [room]="room"></app-room-booking-guest>`,
})
export class WrapperComponent {
  control = new FormControl(null, [Validators.required]);
  room = ROOM_EXTENDED_STUB;
}

describe('RoomBookingGuestComponent', () => {
  let pageObject: RoomBookingGuestsComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
        declarations: [RoomBookingGuestComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new RoomBookingGuestsComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.roomBookingGuestsLabelText).toBe('Гостей');
    expect(pageObject.roomBookingGuestsValue).toBeTruthy();
  });
});
