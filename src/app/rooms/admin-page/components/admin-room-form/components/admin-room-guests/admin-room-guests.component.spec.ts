import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RoomField, ROOMS_IDS } from '@app/rooms/common';

import { AdminRoomGuestsComponent } from './admin-room-guests.component';
import { AdminRoomGuestsComponentPo } from './admin-room-guests.po';

@Component({
  template: `<app-admin-room-guests [control]="control"></app-admin-room-guests>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminRoomGuestsComponent', () => {
  let pageObject: AdminRoomGuestsComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, ReactiveFormsModule],
        declarations: [AdminRoomGuestsComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminRoomGuestsComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomGuestsLabelText).toBe('Гости');
    expect(pageObject.adminRoomGuestsControlId).toBe(ROOMS_IDS[RoomField.Guests]);
  });
});
