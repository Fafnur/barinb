import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { RoomFacade } from '@app/rooms/state';

import { RoomService } from './room.service';

describe('RoomService', () => {
  let service: RoomService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        RoomService,
        {
          provide: RoomFacade,
          useValue: {
            rooms$: of(),
          } as Partial<RoomFacade>,
        },
      ],
    }).compileComponents();

    service = TestBed.inject(RoomService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
