import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCardComponent } from './booking-card.component';

describe('BookingCardComponent', () => {
  let component: BookingCardComponent;
  let fixture: ComponentFixture<BookingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingCardComponent ]
    })
    .compileComponents();
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
