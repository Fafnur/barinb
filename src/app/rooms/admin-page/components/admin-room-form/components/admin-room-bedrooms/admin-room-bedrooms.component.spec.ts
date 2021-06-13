import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RoomField, ROOMS_IDS } from '@app/rooms/common';

import { AdminRoomBedroomsComponent } from './admin-room-bedrooms.component';
import { AdminRoomBedroomsComponentPo } from './admin-room-bedrooms.po';

@Component({
  template: `<app-admin-room-bedrooms [control]="control"></app-admin-room-bedrooms>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminRoomBedroomsComponent', () => {
  let pageObject: AdminRoomBedroomsComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, ReactiveFormsModule],
        declarations: [AdminRoomBedroomsComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminRoomBedroomsComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomBedroomsLabelText).toBe('Комнаты');
    expect(pageObject.adminRoomBedroomsControlId).toBe(ROOMS_IDS[RoomField.Bedrooms]);
  });
});
