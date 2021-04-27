import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BuildingService } from '@app/buildings/service';
import { RoomService } from '@app/rooms/service';

import { BookingService } from './booking.service';

describe('BookingService', () => {
  let service: BookingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        BookingService,
        {
          provide: RoomService,
          useValue: {
            rooms$: of(),
          } as Partial<RoomService>,
        },
        {
          provide: BuildingService,
          useValue: {
            buildings$: of(),
          } as Partial<BuildingService>,
        },
      ],
    }).compileComponents();

    service = TestBed.inject(BookingService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
