import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MockComponents } from 'ng-mocks';
import { of } from 'rxjs';

import { FormErrorsService } from '@app/core/forms/errors';
import { RoomFacade } from '@app/rooms/state';

import { AdminRoomFormComponent } from '../admin-room-form/admin-room-form.component';
import { AdminRoomCreateDialogComponent } from './admin-room-create-dialog.component';

describe('AdminRoomCreateDialogComponent', () => {
  let component: AdminRoomCreateDialogComponent;
  let fixture: ComponentFixture<AdminRoomCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatButtonModule, MatSnackBarModule, ReactiveFormsModule],
      declarations: [AdminRoomCreateDialogComponent, MockComponents(AdminRoomFormComponent)],
      providers: [
        {
          provide: RoomFacade,
          useValue: {
            roomAdded$: of(),
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
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
