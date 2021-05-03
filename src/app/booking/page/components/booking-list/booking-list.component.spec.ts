import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BookingService } from '@app/booking/service';

import { BookingListComponent } from './booking-list.component';

describe('BookingListComponent', () => {
  let component: BookingListComponent;
  let fixture: ComponentFixture<BookingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingListComponent],
      providers: [
        {
          provide: BookingService,
          useValue: {
            bookingVariants$: of([]),
          } as Partial<BookingService>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
