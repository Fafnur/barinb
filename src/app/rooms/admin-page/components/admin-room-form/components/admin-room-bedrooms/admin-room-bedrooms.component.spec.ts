import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AdminRoomBedroomsComponent } from './admin-room-bedrooms.component';

describe('AdminRoomBedroomsComponent', () => {
  let component: AdminRoomBedroomsComponent;
  let fixture: ComponentFixture<AdminRoomBedroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
      declarations: [AdminRoomBedroomsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomBedroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
