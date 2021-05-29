import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { RoomExtended } from '@app/rooms/manager';

import { AdminBuildingRemoveDialogComponent } from './admin-building-remove-dialog.component';

describe('AdminBuildingRemoveDialogComponent', () => {
  let component: AdminBuildingRemoveDialogComponent;
  let fixture: ComponentFixture<AdminBuildingRemoveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatButtonModule],
      declarations: [AdminBuildingRemoveDialogComponent],
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
    fixture = TestBed.createComponent(AdminBuildingRemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
