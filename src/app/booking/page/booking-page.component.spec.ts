import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { RoomService } from '@app/rooms/service';
import { RoomFacade } from '@app/rooms/state';

import { BookingPageComponent } from './booking-page.component';

describe('PageComponent', () => {
  let component: BookingPageComponent;
  let fixture: ComponentFixture<BookingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingPageComponent],
      providers: [
        {
          provide: RoomFacade,
          useValue: {
            loadRooms: jest.fn(),
          } as Partial<RoomFacade>,
        },
        {
          provide: RoomService,
          useValue: {
            rooms$: of([]),
          } as Partial<RoomService>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
