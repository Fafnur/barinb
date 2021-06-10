import { TestBed, waitForAsync } from '@angular/core/testing';
import { hot } from 'jasmine-marbles';
import { ReplaySubject } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { providerOf } from '@app/core/testing';
import { Room } from '@app/rooms/common';
import { ROOM_STUB, RoomFacade, ROOMS_STUB } from '@app/rooms/state';

import { RoomService } from './room.service';

describe('RoomService', () => {
  let service: RoomService;
  let roomFacadeMock: RoomFacade;
  let rooms$: ReplaySubject<Room[]>;
  let room$: ReplaySubject<Room>;

  beforeEach(() => {
    roomFacadeMock = mock(RoomFacade);

    rooms$ = new ReplaySubject<Room[]>(1);
    room$ = new ReplaySubject<Room>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [RoomService, providerOf(RoomFacade, roomFacadeMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(roomFacadeMock.rooms$).thenReturn(rooms$);
    when(roomFacadeMock.room$(anything())).thenReturn(room$);

    service = TestBed.inject(RoomService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return rooms', () => {
    rooms$.next(ROOMS_STUB);

    const expected$ = hot('a', {
      a: ROOMS_STUB,
    });

    expect(service.rooms$).toBeObservable(expected$);
  });

  it('should return room', () => {
    room$.next(ROOM_STUB);

    const expected$ = hot('a', {
      a: ROOM_STUB,
    });

    expect(service.room$(anything())).toBeObservable(expected$);
  });
});
