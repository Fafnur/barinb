import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BuildingFacade } from '@app/buildings/state';
import { PersonFacade } from '@app/persons/state';
import { RoomFacade } from '@app/rooms/state';

import { BuildingManager } from './building.manager';

describe('BuildingManager', () => {
  let service: BuildingManager;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        BuildingManager,
        {
          provide: RoomFacade,
          useValue: {
            roomsByBuilding$: jest.fn(() => of()),
            rooms$: of(),
            room$: jest.fn(() => of()),
            clear: jest.fn(),
            removeRoom: jest.fn(),
          } as Partial<RoomFacade>,
        },
        {
          provide: BuildingFacade,
          useValue: {
            clear: jest.fn(),
            buildings$: of(),
            building$: jest.fn(() => of()),
            clearBuildingsRooms: jest.fn(),
            removeBuildingRoom: jest.fn(),
          } as Partial<BuildingFacade>,
        },
        {
          provide: PersonFacade,
          useValue: {
            removePersonBuilding: jest.fn(),
            person$: jest.fn(() => of()),
          } as Partial<PersonFacade>,
        },
      ],
    }).compileComponents();

    service = TestBed.inject(BuildingManager);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
