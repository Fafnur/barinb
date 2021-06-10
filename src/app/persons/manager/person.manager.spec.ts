import { TestBed } from '@angular/core/testing';
import { ReplaySubject } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { Building } from '@app/buildings/common';
import { BuildingFacade } from '@app/buildings/state';
import { providerOf } from '@app/core/testing';
import { Person } from '@app/persons/common';
import { PersonFacade } from '@app/persons/state';
import { Room } from '@app/rooms/common';
import { RoomFacade } from '@app/rooms/state';

import { PersonManager } from './person.manager';

describe('PersonManager', () => {
  let service: PersonManager;
  let roomFacadeMock: RoomFacade;
  let roomsByBuilding$: ReplaySubject<Room[]>;
  let rooms$: ReplaySubject<Room[]>;
  let buildingFacadeMock: BuildingFacade;
  let buildingsByPerson$: ReplaySubject<Building[]>;
  let buildings$: ReplaySubject<Building[]>;
  let building$: ReplaySubject<Building>;
  let personFacadeMock: PersonFacade;
  let persons$: ReplaySubject<Person[]>;
  let person$: ReplaySubject<Person>;

  beforeEach(() => {
    roomFacadeMock = mock(RoomFacade);
    roomsByBuilding$ = new ReplaySubject<Room[]>(1);
    rooms$ = new ReplaySubject<Room[]>(1);

    buildingFacadeMock = mock(BuildingFacade);
    buildingsByPerson$ = new ReplaySubject<Building[]>(1);
    buildings$ = new ReplaySubject<Building[]>(1);
    building$ = new ReplaySubject<Building>(1);

    personFacadeMock = mock(PersonFacade);
    persons$ = new ReplaySubject<Person[]>(1);
    person$ = new ReplaySubject<Person>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        PersonManager,
        providerOf(RoomFacade, roomFacadeMock),
        providerOf(BuildingFacade, buildingFacadeMock),
        providerOf(PersonFacade, personFacadeMock),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    when(roomFacadeMock.rooms$).thenReturn(rooms$);
    when(roomFacadeMock.roomsByBuilding$(anything())).thenReturn(roomsByBuilding$);
    when(buildingFacadeMock.buildingsByPerson$(anything())).thenReturn(buildingsByPerson$);
    when(buildingFacadeMock.building$(anything())).thenReturn(building$);
    when(buildingFacadeMock.buildings$).thenReturn(buildings$);
    when(personFacadeMock.persons$).thenReturn(persons$);
    when(personFacadeMock.person$(anything())).thenReturn(person$);

    service = TestBed.inject(PersonManager);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
