import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { of } from 'rxjs';

import { BookingService } from '@app/booking/service';
import { BookingSharedModule } from '@app/booking/shared';

import { BookingBoxComponent } from './booking-box.component';

describe('BookingBoxComponent', () => {
  let component: BookingBoxComponent;
  let fixture: ComponentFixture<BookingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MockModule(BookingSharedModule)],
      declarations: [BookingBoxComponent],
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
    fixture = TestBed.createComponent(BookingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
