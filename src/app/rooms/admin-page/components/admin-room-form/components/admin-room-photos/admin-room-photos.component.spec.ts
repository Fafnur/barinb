import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RoomField, ROOMS_IDS } from '@app/rooms/common';

import { AdminRoomPhotosComponent } from './admin-room-photos.component';
import { AdminRoomPhotosComponentPo } from './admin-room-photos.po';

@Component({
  template: `<app-admin-room-photos [control]="control"></app-admin-room-photos>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminRoomPhotosComponent', () => {
  let pageObject: AdminRoomPhotosComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, MatIconModule, MatButtonModule, MatChipsModule, ReactiveFormsModule],
        declarations: [AdminRoomPhotosComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminRoomPhotosComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomPhotosLabelText).toBe('Фотографии');
    expect(pageObject.adminRoomPhotosHintText).toBe('Добавляйте абсолютные пути к изображениям');
    expect(pageObject.adminRoomPhotosControl).toBeTruthy();
    expect(pageObject.adminRoomPhotosControlInputText).toBe(ROOMS_IDS[RoomField.Photos]);
  });
});
