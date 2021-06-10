import { TestBed } from '@angular/core/testing';
import { hot } from 'jasmine-marbles';
import { ReplaySubject } from 'rxjs';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { Building } from '@app/buildings/common';
import { BUILDING_STUB, BuildingFacade, BUILDINGS_STUB } from '@app/buildings/state';
import { providerOf } from '@app/core/testing';
import { Person } from '@app/persons/common';
import { PERSON_STUB, PersonFacade, PERSONS_STUB } from '@app/persons/state';
import { Room } from '@app/rooms/common';
import { RoomFacade, ROOMS_STUB } from '@app/rooms/state';

import { PersonManager } from './person.manager';
import { PERSON_EXTENDED_STUB } from './person-manager.stub';

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

  it('should set personsExtended$', () => {
    buildings$.next(BUILDINGS_STUB);
    rooms$.next(ROOMS_STUB);
    persons$.next(PERSONS_STUB);

    const expected$ = hot('a', {
      a: [PERSON_EXTENDED_STUB],
    });

    expect(service.personsExtended$).toBeObservable(expected$);
  });

  it('should set personExtended$', () => {
    person$.next(PERSON_STUB);
    buildingsByPerson$.next(BUILDINGS_STUB);
    roomsByBuilding$.next(ROOMS_STUB);

    const expected$ = hot('a', {
      a: PERSON_EXTENDED_STUB,
    });

    expect(service.personExtended$(anything())).toBeObservable(expected$);
  });

  it('should call methods for clear states', () => {
    service.clear();

    verify(personFacadeMock.clear()).once();
    verify(roomFacadeMock.clear()).once();
    verify(buildingFacadeMock.clear()).once();
  });

  it('should call methods for remove person', () => {
    service.removePerson(PERSON_EXTENDED_STUB);

    verify(personFacadeMock.removePerson(deepEqual({ id: PERSON_EXTENDED_STUB.id }))).once();
    verify(roomFacadeMock.removeRooms(deepEqual(BUILDING_STUB.rooms))).once();
    verify(buildingFacadeMock.removeBuildings(deepEqual(PERSON_EXTENDED_STUB.buildings))).once();
  });
});
