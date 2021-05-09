import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MockComponents } from 'ng-mocks';
import { of } from 'rxjs';

import { RoomService } from '@app/rooms/service';
import { ColumnComponent, RowComponent } from '@app/ui/row';

import { BookingPageComponent } from './booking-page.component';
import { BookingBoxComponent } from './components/booking-box/booking-box.component';
import { BookingCardComponent } from './components/booking-card/booking-card.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { BookingMapComponent } from './components/booking-map/booking-map.component';

describe('BookingPageComponent', () => {
  let component: BookingPageComponent;
  let fixture: ComponentFixture<BookingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BookingPageComponent,
        MockComponents(
          BookingMapComponent,
          BookingListComponent,
          BookingCardComponent,
          BookingBoxComponent,
          MatIcon,
          MatButton,
          RowComponent,
          ColumnComponent
        ),
      ],
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
