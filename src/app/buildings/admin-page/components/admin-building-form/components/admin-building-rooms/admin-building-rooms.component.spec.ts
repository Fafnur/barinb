import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { BuildingField, BUILDINGS_IDS } from '@app/buildings/common';
import { providerOf } from '@app/core/testing';
import { Room } from '@app/rooms/common';
import { RoomService } from '@app/rooms/service';
import { ROOM_STUB } from '@app/rooms/state';

import { AdminBuildingRoomsComponent } from './admin-building-rooms.component';
import { AdminBuildingRoomsComponentPo } from './admin-building-rooms.po';

@Component({
  template: `<app-admin-building-rooms [control]="control"></app-admin-building-rooms>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminBuildingRoomsComponent', () => {
  let pageObject: AdminBuildingRoomsComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let roomsServiceMock: RoomService;
  let rooms$: ReplaySubject<Room[]>;

  beforeEach(() => {
    roomsServiceMock = mock(RoomService);
    rooms$ = new ReplaySubject<Room[]>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, MatSelectModule, MatButtonModule, ReactiveFormsModule],
        declarations: [AdminBuildingRoomsComponent, WrapperComponent],
        providers: [providerOf(RoomService, roomsServiceMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminBuildingRoomsComponentPo(fixtureWrapper);
    when(roomsServiceMock.rooms$).thenReturn(rooms$);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    rooms$.next([ROOM_STUB]);
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingRoomsLabelText).toBe('Комнаты');
    expect(pageObject.adminBuildingRoomsControlId).toBe(BUILDINGS_IDS[BuildingField.Rooms]);
  });
});
