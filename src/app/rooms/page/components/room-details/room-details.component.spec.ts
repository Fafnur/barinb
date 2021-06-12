import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { ROOM_EXTENDED_STUB } from '@app/rooms/manager';

import { RoomDetailsComponent } from './room-details.component';
import { RoomDetailsComponentPo } from './room-details.po';

@Component({
  template: `<app-room-details automation-id="room-details" [room]="room"></app-room-details>`,
})
export class WrapperComponent {
  room = ROOM_EXTENDED_STUB;
}

describe('RoomDetailsComponent', () => {
  let pageObject: RoomDetailsComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [MatIconModule],
        declarations: [RoomDetailsComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new RoomDetailsComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show details', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.roomDetailsStarText).toBe('star 4.99');
    expect(pageObject.roomDetailsPersonText).toBe('emoji_events Суперхозяин');
    expect(pageObject.roomDetailsAddressText).toBe(ROOM_EXTENDED_STUB.buildingExtended.address);
  });
});
