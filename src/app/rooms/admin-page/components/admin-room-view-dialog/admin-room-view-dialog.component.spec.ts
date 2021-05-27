import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { AdminViewSharedModule } from '@app/admin/view/shared';
import { PersonSharedModule } from '@app/persons/shared';
import { RoomAmenities } from '@app/rooms/common';
import { RoomExtended } from '@app/rooms/manager';
import { RoomSharedModule } from '@app/rooms/shared';

import { AdminRoomViewDialogComponent } from './admin-room-view-dialog.component';

describe('AdminRoomViewDialogComponent', () => {
  let component: AdminRoomViewDialogComponent;
  let fixture: ComponentFixture<AdminRoomViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatButtonModule, PersonSharedModule, AdminViewSharedModule, RoomSharedModule],
      declarations: [AdminRoomViewDialogComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { amenities: [RoomAmenities.Tv], buildingExtended: { personExtended: {} } } as RoomExtended,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
