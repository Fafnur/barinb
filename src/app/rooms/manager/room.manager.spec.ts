import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BuildingFacade } from '@app/buildings/state';
import { PersonService } from '@app/persons/service';
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
          provide: PersonService,
          useValue: {
            person$: jest.fn(() => of()),
          } as Partial<PersonService>,
        },
      ],
    }).compileComponents();

    service = TestBed.inject(RoomManager);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
