import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AdminRoomPriceComponent } from './admin-room-price.component';

describe('AdminRoomPriceComponent', () => {
  let component: AdminRoomPriceComponent;
  let fixture: ComponentFixture<AdminRoomPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
      declarations: [AdminRoomPriceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
