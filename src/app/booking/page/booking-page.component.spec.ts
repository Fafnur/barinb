import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { of } from 'rxjs';

import { RoomService } from '@app/rooms/service';

import { GoogleMapComponent } from '../../maps/shared/google-map.component';
import { BookingPageComponent } from './booking-page.component';

describe('BookingPageComponent', () => {
  let component: BookingPageComponent;
  let fixture: ComponentFixture<BookingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingPageComponent, MockComponents(GoogleMapComponent)],
      providers: [
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
