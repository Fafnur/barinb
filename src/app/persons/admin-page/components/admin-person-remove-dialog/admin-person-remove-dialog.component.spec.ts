import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { RoomExtended } from '@app/rooms/manager';

import { AdminPersonRemoveDialogComponent } from './admin-person-remove-dialog.component';

describe('AdminPersonRemoveDialogComponent', () => {
  let component: AdminPersonRemoveDialogComponent;
  let fixture: ComponentFixture<AdminPersonRemoveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatButtonModule],
      declarations: [AdminPersonRemoveDialogComponent],
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
    fixture = TestBed.createComponent(AdminPersonRemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
