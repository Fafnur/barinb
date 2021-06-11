import { TestBed, waitForAsync } from '@angular/core/testing';
import { hot } from 'jasmine-marbles';
import { ReplaySubject } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { Building } from '@app/buildings/common';
import { BUILDING_STUB, BuildingFacade } from '@app/buildings/state';
import { providerOf } from '@app/core/testing';
import { Person } from '@app/persons/common';
import { PERSON_STUB, PersonFacade } from '@app/persons/state';
import { Room } from '@app/rooms/common';
import { ROOM_STUB, RoomFacade, ROOMS_STUB } from '@app/rooms/state';

import { RoomManager } from './room.manager';
import { ROOM_EXTENDED_STUB } from './room-manager.stub';

describe('RoomManager', () => {
  let service: RoomManager;
  let roomFacadeMock: RoomFacade;
  let rooms$: ReplaySubject<Room[]>;
  let room$: ReplaySubject<Room>;
  let buildingFacadeMock: BuildingFacade;
  let building$: ReplaySubject<Building>;
  let personFacadeMock: PersonFacade;
  let person$: ReplaySubject<Person>;

  beforeEach(() => {
    roomFacadeMock = mock(RoomFacade);
    rooms$ = new ReplaySubject<Room[]>(1);
    room$ = new ReplaySubject<Room>(1);

    buildingFacadeMock = mock(BuildingFacade);
    building$ = new ReplaySubject<Building>(1);

    personFacadeMock = mock(PersonFacade);
    person$ = new ReplaySubject<Person>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [
          RoomManager,
          providerOf(RoomFacade, roomFacadeMock),
          providerOf(BuildingFacade, buildingFacadeMock),
          providerOf(PersonFacade, personFacadeMock),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(roomFacadeMock.rooms$).thenReturn(rooms$);
    when(roomFacadeMock.room$(anything())).thenReturn(room$);
    when(buildingFacadeMock.building$(anything())).thenReturn(building$);
    when(personFacadeMock.person$(anything())).thenReturn(person$);

    service = TestBed.inject(RoomManager);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should set roomsExtended$', () => {
    building$.next(BUILDING_STUB);
    rooms$.next(ROOMS_STUB);
    person$.next(PERSON_STUB);

    const expected$ = hot('a', {
      a: [ROOM_EXTENDED_STUB],
    });

    expect(service.roomsExtended$).toBeObservable(expected$);
  });

  it('should set roomExtended$', () => {
    person$.next(PERSON_STUB);
    building$.next(BUILDING_STUB);
    room$.next(ROOM_STUB);

    const expected$ = hot('a', {
      a: ROOM_EXTENDED_STUB,
    });

    expect(service.roomExtended$(anything())).toBeObservable(expected$);
  });
});
