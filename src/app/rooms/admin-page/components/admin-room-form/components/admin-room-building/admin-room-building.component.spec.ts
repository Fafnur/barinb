import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReplaySubject } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { Building } from '@app/buildings/common';
import { BuildingService } from '@app/buildings/service';
import { providerOf } from '@app/core/testing';
import { RoomField, ROOMS_IDS } from '@app/rooms/common';
import { RoomSharedModule } from '@app/rooms/shared';

import { AdminRoomBuildingComponent } from './admin-room-building.component';
import { AdminRoomBuildingComponentPo } from './admin-room-building.po';

@Component({
  template: `<app-admin-room-building [control]="control"></app-admin-room-building>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminRoomBuildingComponent', () => {
  let pageObject: AdminRoomBuildingComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let buildingServiceMock: BuildingService;
  let building$: ReplaySubject<Building>;
  let buildingsByPerson$: ReplaySubject<Building[]>;

  beforeEach(() => {
    buildingServiceMock = mock(BuildingService);

    building$ = new ReplaySubject<Building>(1);
    buildingsByPerson$ = new ReplaySubject<Building[]>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, MatSelectModule, ReactiveFormsModule, RoomSharedModule],
        declarations: [AdminRoomBuildingComponent, WrapperComponent],
        providers: [providerOf(BuildingService, buildingServiceMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminRoomBuildingComponentPo(fixtureWrapper);
    when(buildingServiceMock.building$(anything())).thenReturn(building$);
    when(buildingServiceMock.buildingsByPerson$(anything())).thenReturn(buildingsByPerson$);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomBuildingLabelText).toBe('Здание');
    expect(pageObject.adminRoomBuildingControlId).toBe(ROOMS_IDS[RoomField.Building]);
  });
});
