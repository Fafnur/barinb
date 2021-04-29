import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { of } from 'rxjs';

import { BookingService } from '@app/booking/service';
import { GoogleMapComponent } from '@app/maps/shared';

import { BookingMapComponent } from './booking-map.component';

describe('BookingMapComponent', () => {
  let component: BookingMapComponent;
  let fixture: ComponentFixture<BookingMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingMapComponent, MockComponents(GoogleMapComponent)],
      providers: [
        {
          provide: BookingService,
          useValue: {
            mapMarkers$: of([]),
            setBookingVariant: jest.fn(),
            clearBookingVariant: jest.fn(),
          } as Partial<BookingService>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
