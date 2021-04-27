import { TestBed } from '@angular/core/testing';

import { BookingService } from './booking.service';

describe('BookingService', () => {
  let service: BookingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        BookingService,
        // {
        //   provide: RoomFacade,
        //   useValue: {
        //     rooms$: of(),
        //   } as Partial<RoomFacade>,
        // },
      ],
    }).compileComponents();

    service = TestBed.inject(BookingService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
