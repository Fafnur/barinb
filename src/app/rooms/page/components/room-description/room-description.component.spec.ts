import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ROOM_EXTENDED_STUB } from '@app/rooms/manager';

import { RoomDescriptionComponent } from './room-description.component';
import { RoomDescriptionComponentPo } from './room-description.po';

@Component({
  template: `<app-room-description automation-id="room-description" [room]="room"></app-room-description>`,
})
export class WrapperComponent {
  room = ROOM_EXTENDED_STUB;
}

describe('RoomDescriptionComponent', () => {
  let pageObject: RoomDescriptionComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        declarations: [RoomDescriptionComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new RoomDescriptionComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show description', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.roomDescriptionText).toBe(ROOM_EXTENDED_STUB.description);
  });
});
