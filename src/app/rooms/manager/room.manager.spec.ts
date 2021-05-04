import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BuildingService } from '@app/buildings/service';
import { PersonService } from '@app/persons/service';
import { RoomService } from '@app/rooms/service';

import { RoomManager } from './room.manager';

describe('RoomManager', () => {
  let service: RoomManager;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        RoomManager,
        {
          provide: RoomService,
          useValue: {
            room$: jest.fn(() => of()),
          } as Partial<RoomService>,
        },
        {
          provide: BuildingService,
          useValue: {
            building$: jest.fn(() => of()),
          } as Partial<BuildingService>,
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
