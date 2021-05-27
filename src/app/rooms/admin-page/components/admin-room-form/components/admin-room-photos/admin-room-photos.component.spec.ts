import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AdminRoomPhotosComponent } from './admin-room-photos.component';

describe('AdminRoomPhotosComponent', () => {
  let component: AdminRoomPhotosComponent;
  let fixture: ComponentFixture<AdminRoomPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputModule, MatIconModule, MatButtonModule, MatChipsModule, ReactiveFormsModule],
      declarations: [AdminRoomPhotosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
