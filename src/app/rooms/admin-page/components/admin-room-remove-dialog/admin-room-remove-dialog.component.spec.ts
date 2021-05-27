import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { RoomExtended } from '@app/rooms/manager';

import { AdminRoomRemoveDialogComponent } from './admin-room-remove-dialog.component';

describe('AdminRoomRemoveDialogComponent', () => {
  let component: AdminRoomRemoveDialogComponent;
  let fixture: ComponentFixture<AdminRoomRemoveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatButtonModule],
      declarations: [AdminRoomRemoveDialogComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: jest.fn(),
          } as Partial<MatDialogRef<any>>,
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {} as RoomExtended,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomRemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
