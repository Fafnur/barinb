import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

import { RoomBookingDateComponent } from './room-booking-date.component';

describe('RoomBookingDateComponent', () => {
  let component: RoomBookingDateComponent;
  let fixture: ComponentFixture<RoomBookingDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputModule, MatNativeDateModule, MatDatepickerModule, ReactiveFormsModule],
      declarations: [RoomBookingDateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBookingDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
