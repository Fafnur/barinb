import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BuildingFacade } from '@app/buildings/state';
import { PersonFacade } from '@app/persons/state';
import { RoomFacade } from '@app/rooms/state';

import { RoomManager } from './room.manager';

describe('RoomManager', () => {
  let service: RoomManager;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        RoomManager,
        {
          provide: RoomFacade,
          useValue: {
            rooms$: of(),
            room$: jest.fn(() => of()),
            clear: jest.fn(),
            removeRoom: jest.fn(),
          } as Partial<RoomFacade>,
        },
        {
          provide: BuildingFacade,
          useValue: {
            building$: jest.fn(() => of()),
            clearBuildingsRooms: jest.fn(),
            removeBuildingRoom: jest.fn(),
          } as Partial<BuildingFacade>,
        },
        {
          provide: PersonFacade,
          useValue: {
            person$: jest.fn(() => of()),
          } as Partial<PersonFacade>,
        },
      ],
    }).compileComponents();

    service = TestBed.inject(RoomManager);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
