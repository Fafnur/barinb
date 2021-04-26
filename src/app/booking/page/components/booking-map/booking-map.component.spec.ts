import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingMapComponent } from './booking-map.component';

describe('BookingMapComponent', () => {
  let component: BookingMapComponent;
  let fixture: ComponentFixture<BookingMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingMapComponent ]
    })
    .compileComponents();
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
