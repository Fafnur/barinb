import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MockModule } from 'ng-mocks';

import { RoomSharedModule } from '@app/rooms/shared';

import { AdminRoomAmenitiesComponent } from './admin-room-amenities.component';

describe('AdminRoomAmenitiesComponent', () => {
  let component: AdminRoomAmenitiesComponent;
  let fixture: ComponentFixture<AdminRoomAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputModule, MatSelectModule, MatIconModule, MatButtonModule, ReactiveFormsModule, MockModule(RoomSharedModule)],
      declarations: [AdminRoomAmenitiesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
