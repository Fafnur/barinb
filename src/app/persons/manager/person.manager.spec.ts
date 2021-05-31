import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BuildingFacade } from '@app/buildings/state';
import { PersonFacade } from '@app/persons/state';
import { RoomFacade } from '@app/rooms/state';

import { PersonManager } from './person.manager';

describe('PersonManager', () => {
  let service: PersonManager;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        PersonManager,
        {
          provide: RoomFacade,
          useValue: {
            clear: jest.fn(),
            removeRooms: jest.fn(),
            roomsByBuilding$: jest.fn(() => of()),
            rooms$: of(),
          } as Partial<RoomFacade>,
        },
        {
          provide: BuildingFacade,
          useValue: {
            clear: jest.fn(),
            removeBuildings: jest.fn(),
            buildings$: of(),
            building$: jest.fn(() => of()),
            buildingsByPerson$: jest.fn(() => of()),
          } as Partial<BuildingFacade>,
        },
        {
          provide: PersonFacade,
          useValue: {
            persons$: of(),
            removePerson: jest.fn(),
            person$: jest.fn(() => of()),
          } as Partial<PersonFacade>,
        },
      ],
    }).compileComponents();

    service = TestBed.inject(PersonManager);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
