import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MockComponents } from 'ng-mocks';
import { of } from 'rxjs';

import { FormErrorsService } from '@app/core/forms/errors';
import { RoomExtended } from '@app/rooms/manager';
import { RoomFacade } from '@app/rooms/state';

import { AdminRoomFormComponent } from '../admin-room-form/admin-room-form.component';
import { AdminRoomEditDialogComponent } from './admin-room-edit-dialog.component';

describe('AdminRoomEditDialogComponent', () => {
  let component: AdminRoomEditDialogComponent;
  let fixture: ComponentFixture<AdminRoomEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatButtonModule, MatSnackBarModule, ReactiveFormsModule],
      declarations: [AdminRoomEditDialogComponent, MockComponents(AdminRoomFormComponent)],
      providers: [
        {
          provide: RoomFacade,
          useValue: {
            roomChanged$: of(),
          } as Partial<RoomFacade>,
        },
        {
          provide: FormErrorsService,
          useValue: {
            scrollToFirstError: jest.fn(),
          } as Partial<FormErrorsService>,
        },
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
    fixture = TestBed.createComponent(AdminRoomEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
