import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RoomField, ROOMS_IDS } from '@app/rooms/common';

import { AdminRoomPriceComponent } from './admin-room-price.component';
import { AdminRoomPriceComponentPo } from './admin-room-price.po';

@Component({
  template: `<app-admin-room-price [control]="control"></app-admin-room-price>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminRoomPriceComponent', () => {
  let pageObject: AdminRoomPriceComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, ReactiveFormsModule],
        declarations: [AdminRoomPriceComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminRoomPriceComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomPriceLabelText).toBe('Цена за ночь');
    expect(pageObject.adminRoomPriceControlId).toBe(ROOMS_IDS[RoomField.Price]);
  });
});
