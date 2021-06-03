import { TestBed, waitForAsync } from '@angular/core/testing';
import { hot } from 'jasmine-marbles';
import { ReplaySubject } from 'rxjs';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { Building } from '@app/buildings/common';
import { BUILDING_STUB, BuildingFacade, BUILDINGS_STUB } from '@app/buildings/state';
import { providerOf } from '@app/core/testing';
import { Person } from '@app/persons/common';
import { PERSON_STUB, PersonFacade } from '@app/persons/state';
import { Room } from '@app/rooms/common';
import { RoomFacade, ROOMS_STUB } from '@app/rooms/state';

import { BuildingExtended, BuildingManager } from './building.manager';

describe('BuildingManager', () => {
  let service: BuildingManager;
  let roomFacadeMock: RoomFacade;
  let buildingFacadeMock: BuildingFacade;
  let personFacadeMock: PersonFacade;
  let rooms$: ReplaySubject<Room[]>;
  let roomsByBuilding$: ReplaySubject<Room[]>;
  let buildings$: ReplaySubject<Building[]>;
  let building$: ReplaySubject<Building>;
  let person$: ReplaySubject<Person>;

  beforeEach(() => {
    roomFacadeMock = mock(RoomFacade);
    buildingFacadeMock = mock(BuildingFacade);
    personFacadeMock = mock(PersonFacade);
    rooms$ = new ReplaySubject<Room[]>(1);
    roomsByBuilding$ = new ReplaySubject<Room[]>(1);
    buildings$ = new ReplaySubject<Building[]>(1);
    building$ = new ReplaySubject<Building>(1);
    person$ = new ReplaySubject<Person>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [
          BuildingManager,
          providerOf(RoomFacade, roomFacadeMock),
          providerOf(BuildingFacade, buildingFacadeMock),
          providerOf(PersonFacade, personFacadeMock),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(roomFacadeMock.rooms$).thenReturn(rooms$);
    when(roomFacadeMock.roomsByBuilding$(anything())).thenReturn(roomsByBuilding$);
    when(buildingFacadeMock.buildings$).thenReturn(buildings$);
    when(buildingFacadeMock.building$(anything())).thenReturn(building$);
    when(personFacadeMock.person$(anything())).thenReturn(person$);

    service = TestBed.inject(BuildingManager);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should set buildingsExtended$', () => {
    buildings$.next(BUILDINGS_STUB);
    roomsByBuilding$.next(ROOMS_STUB);
    person$.next(PERSON_STUB);

    const result: BuildingExtended[] = [{ ...BUILDINGS_STUB[0], roomsExtended: ROOMS_STUB, personExtended: PERSON_STUB }];

    const expected$ = hot('a', {
      a: result,
    });

    expect(service.buildingsExtended$).toBeObservable(expected$);
  });

  it('should set buildingExtended$', () => {
    building$.next(BUILDING_STUB);
    roomsByBuilding$.next(ROOMS_STUB);
    person$.next(PERSON_STUB);

    const result: BuildingExtended = { ...BUILDING_STUB, roomsExtended: ROOMS_STUB, personExtended: PERSON_STUB };

    const expected$ = hot('a', {
      a: result,
    });

    expect(service.buildingExtended$(anything())).toBeObservable(expected$);
  });

  it('should call methods for clear states', () => {
    service.clear();

    verify(personFacadeMock.clearPersonsBuildings()).once();
    verify(roomFacadeMock.clear()).once();
    verify(buildingFacadeMock.clear()).once();
  });

  it('should call methods for clear states', () => {
    service.removeBuilding(BUILDING_STUB);

    verify(personFacadeMock.removePersonBuilding(deepEqual({ id: BUILDING_STUB.person, building: BUILDING_STUB.id }))).once();
    verify(roomFacadeMock.removeRooms(BUILDING_STUB.rooms)).once();
    verify(buildingFacadeMock.removeBuilding(deepEqual({ id: BUILDING_STUB.id }))).once();
  });
});
