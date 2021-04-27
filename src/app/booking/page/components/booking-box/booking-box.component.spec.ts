import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingBoxComponent } from './booking-box.component';

describe('BookingBoxComponent', () => {
  let component: BookingBoxComponent;
  let fixture: ComponentFixture<BookingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingBoxComponent ]
    })
    .compileComponents();
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
