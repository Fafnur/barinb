import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BookingField } from '@app/booking/common';

import { RoomBookingDateComponent } from './room-booking-date.component';
import { RoomBookingDateComponentPo } from './room-booking-date.po';

@Component({
  template: `<app-room-booking-date [control]="control"></app-room-booking-date>`,
})
export class WrapperComponent {
  control = new FormGroup({
    [BookingField.PeriodStart]: new FormControl(null, [Validators.required]),
    [BookingField.PeriodEnd]: new FormControl(null, [Validators.required]),
  });
}

describe('RoomBookingDateComponent', () => {
  let pageObject: RoomBookingDateComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, ReactiveFormsModule],
        declarations: [RoomBookingDateComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new RoomBookingDateComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.roomBookingDateLabelText).toBe('Прибытие - Выезд');
    expect(pageObject.roomBookingDateRange).toBeTruthy();
    expect(pageObject.roomBookingDateStart).toBeTruthy();
    expect(pageObject.roomBookingDateEnd).toBeTruthy();
    expect(pageObject.roomBookingDatepickerToggle).toBeTruthy();
    expect(pageObject.roomBookingRangePicker).toBeTruthy();
  });
});
