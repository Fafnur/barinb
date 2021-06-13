import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RoomField, ROOMS_IDS } from '@app/rooms/common';

import { AdminRoomDescriptionComponent } from './admin-room-description.component';
import { AdminRoomDescriptionComponentPo } from './admin-room-description.po';

@Component({
  template: `<app-admin-room-description [control]="control"></app-admin-room-description>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminRoomDescriptionComponent', () => {
  let pageObject: AdminRoomDescriptionComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, ReactiveFormsModule],
        declarations: [AdminRoomDescriptionComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminRoomDescriptionComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomDescriptionLabelText).toBe('Описание');
    expect(pageObject.adminRoomDescriptionControlId).toBe(ROOMS_IDS[RoomField.Description]);
  });
});
