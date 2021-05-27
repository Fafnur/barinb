import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AdminRoomBedsComponent } from './admin-room-beds.component';

describe('AdminRoomBedsComponent', () => {
  let component: AdminRoomBedsComponent;
  let fixture: ComponentFixture<AdminRoomBedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
      declarations: [AdminRoomBedsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomBedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
