import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents, MockModule } from 'ng-mocks';
import { of } from 'rxjs';

import { BookingService } from '@app/booking/service';
import { BookingSharedModule } from '@app/booking/shared';
import { CarouselComponent } from '@app/ui/carousel';

import { BookingCardComponent } from './booking-card.component';

describe('BookingCardComponent', () => {
  let component: BookingCardComponent;
  let fixture: ComponentFixture<BookingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MockModule(BookingSharedModule)],
      declarations: [BookingCardComponent, MockComponents(CarouselComponent)],
      providers: [
        {
          provide: BookingService,
          useValue: {
            bookingVariant$: of(),
          } as Partial<BookingService>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
