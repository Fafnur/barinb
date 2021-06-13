import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RoomField, ROOMS_IDS } from '@app/rooms/common';
import { RoomSharedModule } from '@app/rooms/shared';

import { AdminRoomAmenitiesComponent } from './admin-room-amenities.component';
import { AdminRoomAmenitiesComponentPo } from './admin-room-amenities.po';

@Component({
  template: `<app-admin-room-amenities [control]="control"></app-admin-room-amenities>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminRoomAmenitiesComponent', () => {
  let pageObject: AdminRoomAmenitiesComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, MatSelectModule, ReactiveFormsModule, RoomSharedModule],
        declarations: [AdminRoomAmenitiesComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminRoomAmenitiesComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomAmenitiesLabelText).toBe('Особенности');
    expect(pageObject.adminRoomAmenitiesControlId).toBe(ROOMS_IDS[RoomField.Amenities]);
  });
});
