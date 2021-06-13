import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RoomField, ROOMS_IDS } from '@app/rooms/common';

import { AdminRoomBathroomsComponent } from './admin-room-bathrooms.component';
import { AdminRoomBathroomsComponentPo } from './admin-room-bathrooms.po';

@Component({
  template: `<app-admin-room-bathrooms [control]="control"></app-admin-room-bathrooms>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminRoomBathroomsComponent', () => {
  let pageObject: AdminRoomBathroomsComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, ReactiveFormsModule],
        declarations: [AdminRoomBathroomsComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminRoomBathroomsComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomBathroomsLabelText).toBe('Ванные');
    expect(pageObject.adminRoomBathroomsControlId).toBe(ROOMS_IDS[RoomField.Bathrooms]);
  });
});
