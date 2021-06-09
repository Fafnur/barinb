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
import { Person } from '@app/persons/common';
import { PersonService } from '@app/persons/service';
import { PersonSharedModule } from '@app/persons/shared';
import { PERSON_STUB } from '@app/persons/state';

import { AdminBuildingPersonComponent } from './admin-building-person.component';
import { AdminBuildingPersonComponentPo } from './admin-building-person.po';

@Component({
  template: `<app-admin-building-person [control]="control"></app-admin-building-person>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminBuildingPersonComponent', () => {
  let pageObject: AdminBuildingPersonComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let personServiceMock: PersonService;
  let persons$: ReplaySubject<Person[]>;

  beforeEach(() => {
    personServiceMock = mock(PersonService);
    persons$ = new ReplaySubject<Person[]>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatInputModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, PersonSharedModule],
        declarations: [AdminBuildingPersonComponent, WrapperComponent],
        providers: [providerOf(PersonService, personServiceMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminBuildingPersonComponentPo(fixtureWrapper);
    when(personServiceMock.persons$).thenReturn(persons$);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    persons$.next([PERSON_STUB]);
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingPersonLabelText).toBe('Собственник');
    expect(pageObject.adminBuildingPersonControlId).toBe(BUILDINGS_IDS[BuildingField.Person]);
  });
});
