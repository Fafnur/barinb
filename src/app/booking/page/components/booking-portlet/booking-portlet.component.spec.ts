import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPortletComponent } from './booking-portlet.component';

describe('BookingPortletComponent', () => {
  let component: BookingPortletComponent;
  let fixture: ComponentFixture<BookingPortletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPortletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPortletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
