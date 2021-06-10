import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { Building } from '@app/buildings/common';
import { BuildingService } from '@app/buildings/service';
import { BUILDINGS_STUB } from '@app/buildings/state';
import { providerOf } from '@app/core/testing';
import { PersonField, PERSONS_IDS } from '@app/persons/common';

import { AdminPersonBuildingsComponent } from './admin-person-buildings.component';
import { AdminPersonBuildingsComponentPo } from './admin-person-buildings.po';

@Component({
  template: `<app-admin-person-buildings [control]="control"></app-admin-person-buildings>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminPersonBuildingsComponent', () => {
  let pageObject: AdminPersonBuildingsComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let buildingServiceMock: BuildingService;
  let buildings$: ReplaySubject<Building[]>;

  beforeEach(() => {
    buildingServiceMock = mock(BuildingService);

    buildings$ = new ReplaySubject<Building[]>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
        declarations: [AdminPersonBuildingsComponent, WrapperComponent],
        providers: [providerOf(BuildingService, buildingServiceMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminPersonBuildingsComponentPo(fixtureWrapper);
    when(buildingServiceMock.buildings$).thenReturn(buildings$);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();
    buildings$.next(BUILDINGS_STUB);

    expect(pageObject.adminPersonAddressLabelText).toBe('Отели');
    expect(pageObject.adminPersonAddressControlId).toBe(PERSONS_IDS[PersonField.Buildings]);
  });
});
