import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { providerOf } from '@app/core/testing';
import { Person } from '@app/persons/common';
import { PersonService } from '@app/persons/service';
import { PersonSharedModule } from '@app/persons/shared';
import { RoomField, ROOMS_IDS } from '@app/rooms/common';

import { AdminRoomPersonComponent } from './admin-room-person.component';
import { AdminRoomPersonComponentPo } from './admin-room-person.po';

@Component({
  template: `<app-admin-room-person [control]="control"></app-admin-room-person>`,
})
export class WrapperComponent {
  control = new FormControl(null, []);
}

describe('AdminRoomPersonComponent', () => {
  let pageObject: AdminRoomPersonComponentPo;
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
        imports: [NoopAnimationsModule, MatInputModule, MatSelectModule, ReactiveFormsModule, PersonSharedModule],
        declarations: [AdminRoomPersonComponent, WrapperComponent],
        providers: [providerOf(PersonService, personServiceMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminRoomPersonComponentPo(fixtureWrapper);
    when(personServiceMock.persons$).thenReturn(persons$);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set label and control', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomPersonLabelText).toBe('Собственник');
    expect(pageObject.adminRoomPersonControlId).toBe(ROOMS_IDS[RoomField.Person]);
  });
});
