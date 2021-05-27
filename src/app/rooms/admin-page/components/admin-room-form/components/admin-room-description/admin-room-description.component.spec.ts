import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AdminRoomDescriptionComponent } from './admin-room-description.component';

describe('AdminRoomDescriptionComponent', () => {
  let component: AdminRoomDescriptionComponent;
  let fixture: ComponentFixture<AdminRoomDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
      declarations: [AdminRoomDescriptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
