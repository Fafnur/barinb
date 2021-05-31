import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MockComponents, MockModule } from 'ng-mocks';
import { of } from 'rxjs';

import { RoomService } from '@app/rooms/service';
import { ContainerComponent } from '@app/ui/container';
import { ColumnComponent, RowComponent } from '@app/ui/grid';

import { BookingPageComponent } from './booking-page.component';
import { BookingBoxModule } from './components/booking-box/booking-box.module';
import { BookingCardModule } from './components/booking-card/booking-card.module';
import { BookingListModule } from './components/booking-list/booking-list.module';
import { BookingMapModule } from './components/booking-map/booking-map.module';

describe('BookingPageComponent', () => {
  let component: BookingPageComponent;
  let fixture: ComponentFixture<BookingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatIconModule,
        MockModule(BookingMapModule),
        MockModule(BookingListModule),
        MockModule(BookingCardModule),
        MockModule(BookingBoxModule),
      ],
      declarations: [BookingPageComponent, MockComponents(RowComponent, ColumnComponent, ContainerComponent)],
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
