import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MockComponents } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { FormErrorsService } from '@app/core/forms/errors';
import { providerOf } from '@app/core/testing';
import { ChangedRoom, ROOMS_IDS } from '@app/rooms/common';
import { ROOM_EXTENDED_STUB } from '@app/rooms/manager';
import { CHANGED_ROOM_STUB, RoomFacade } from '@app/rooms/state';

import { AdminRoomFormComponent } from '../admin-room-form/admin-room-form.component';
import { AdminRoomEditDialogComponent } from './admin-room-edit-dialog.component';
import { AdminRoomEditDialogComponentPo } from './admin-room-edit-dialog.po';

describe('AdminRoomEditDialogComponent', () => {
  let pageObject: AdminRoomEditDialogComponentPo;
  let fixture: ComponentFixture<AdminRoomEditDialogComponent>;
  let roomFacadeMock: RoomFacade;
  let matDialogRefMock: MatDialogRef<AdminRoomEditDialogComponent>;
  let matSnackBarMock: MatSnackBar;
  let formErrorsServiceMock: FormErrorsService;
  let roomChanged$: ReplaySubject<ChangedRoom>;

  beforeEach(() => {
    matDialogRefMock = mock(MatDialogRef);
    matSnackBarMock = mock(MatSnackBar);
    roomFacadeMock = mock(RoomFacade);
    formErrorsServiceMock = mock(FormErrorsService);

    roomChanged$ = new ReplaySubject<ChangedRoom>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatButtonModule, MatSnackBarModule, ReactiveFormsModule],
      declarations: [AdminRoomEditDialogComponent, MockComponents(AdminRoomFormComponent)],
      providers: [
        providerOf(MatSnackBar, matSnackBarMock),
        providerOf(MatDialogRef, matDialogRefMock),
        providerOf(RoomFacade, roomFacadeMock),
        providerOf(FormErrorsService, formErrorsServiceMock),
        {
          provide: MAT_DIALOG_DATA,
          useValue: ROOM_EXTENDED_STUB,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomEditDialogComponent);
    pageObject = new AdminRoomEditDialogComponentPo(fixture);
    when(roomFacadeMock.roomChanged$).thenReturn(roomChanged$);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show forms and actions', () => {
    fixture.detectChanges();

    expect(pageObject.adminRoomForm).toBeTruthy();
    expect(pageObject.adminRoomChangeText).toBe('Изменить');
    expect(pageObject.adminRoomCancelText).toBe('Отмена');
  });

  it('should call methods services after create room', () => {
    fixture.detectChanges();

    roomChanged$.next(CHANGED_ROOM_STUB);
    fixture.detectChanges();

    verify(matDialogRefMock.close(true)).once();
    verify(matSnackBarMock.open('Номер успешно изменен!', '', deepEqual({ duration: 5000 }))).once();
  });

  it('should call methods services after create room', () => {
    fixture.detectChanges();

    pageObject.triggerAdminRoomChangeClick();
    fixture.detectChanges();

    verify(roomFacadeMock.changeRoom(deepEqual({ id: ROOM_EXTENDED_STUB.id }))).once();
  });

  it('should call formErrorsService scrollToFirstError', () => {
    fixture.detectChanges();

    pageObject.setFormError();
    pageObject.triggerAdminRoomChangeClick();
    fixture.detectChanges();

    verify(formErrorsServiceMock.scrollToFirstError(anything(), deepEqual(ROOMS_IDS))).once();
  });
});
