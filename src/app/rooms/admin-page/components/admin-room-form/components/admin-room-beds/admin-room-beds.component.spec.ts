import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RoomField, ROOMS_IDS } from '@app/rooms/common';

import { AdminRoomBedsComponent } from './admin-room-beds.component';
import { AdminRoomBedsComponentPo } from './admin-room-beds.po';

@Component({
  template: `<app-admin-room-beds [control]="control"></app-admin-room-beds>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminRoomBedsComponent', () => {
  let pageObject: AdminRoomBedsComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, ReactiveFormsModule],
        declarations: [AdminRoomBedsComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminRoomBedsComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomBedsLabelText).toBe('Спальные места');
    expect(pageObject.adminRoomBedsControlId).toBe(ROOMS_IDS[RoomField.Beds]);
  });
});
