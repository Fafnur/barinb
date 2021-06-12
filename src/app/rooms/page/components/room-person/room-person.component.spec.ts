import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ROOM_EXTENDED_STUB } from '@app/rooms/manager';

import { RoomPersonComponent } from './room-person.component';
import { RoomPersonComponentPo } from './room-person.po';

@Component({
  template: `<app-room-person [room]="room"></app-room-person>`,
})
export class WrapperComponent {
  room = ROOM_EXTENDED_STUB;
}

describe('RoomPersonComponent', () => {
  let pageObject: RoomPersonComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        declarations: [RoomPersonComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new RoomPersonComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show person', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.roomPersonTitleText).toBe(
      `Квартира целиком, хозяин: ${ROOM_EXTENDED_STUB.buildingExtended.personExtended.firstName}`
    );
    expect(pageObject.roomPersonAvatarSrc).toBe(ROOM_EXTENDED_STUB.buildingExtended.personExtended.avatar);
  });
});
