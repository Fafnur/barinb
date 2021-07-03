import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { mock, verify } from 'ts-mockito';

import { NavigationPath } from '@app/core/navigation/common';
import { NavigationService } from '@app/core/navigation/service';
import { providerOf } from '@app/core/testing';
import { ROOM_EXTENDED_STUB } from '@app/rooms/manager';

import { RoomHeaderComponent } from './room-header.component';
import { RoomHeaderComponentPo } from './room-header.po';

@Component({
  template: `<app-room-header [room]="room"></app-room-header>`,
})
export class WrapperComponent {
  room = ROOM_EXTENDED_STUB;
}

describe('RoomHeaderComponent', () => {
  let pageObject: RoomHeaderComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let navigationServiceMock: NavigationService;

  beforeEach(() => {
    navigationServiceMock = mock(NavigationService);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule, MatIconModule, MatButtonModule],
        declarations: [RoomHeaderComponent, WrapperComponent],
        providers: [providerOf(NavigationService, navigationServiceMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new RoomHeaderComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show header', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.roomHeaderTitleText).toBe(ROOM_EXTENDED_STUB.buildingExtended.name);
    expect(pageObject.roomHeaderCloseText).toBe('close');
  });

  it('should call method navigate', () => {
    fixtureWrapper.detectChanges();

    pageObject.triggerRoomHeaderCloseClick();

    verify(navigationServiceMock.navigateByUrl(NavigationPath.Home)).once();
  });
});
