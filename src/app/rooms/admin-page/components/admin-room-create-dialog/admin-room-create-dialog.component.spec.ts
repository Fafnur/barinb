import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { BuildingFacade } from '@app/buildings/state';
import { FormErrorsService } from '@app/core/forms/errors';
import { providerOf } from '@app/core/testing';
import { Room, ROOMS_IDS } from '@app/rooms/common';
import { ROOM_STUB, RoomFacade } from '@app/rooms/state';

import { AdminRoomFormModule } from '../admin-room-form/admin-room-form.module';
import { AdminRoomCreateDialogComponent } from './admin-room-create-dialog.component';
import { AdminRoomCreateDialogComponentPo } from './admin-room-create-dialog.po';

describe('AdminRoomCreateDialogComponent', () => {
  let pageObject: AdminRoomCreateDialogComponentPo;
  let fixture: ComponentFixture<AdminRoomCreateDialogComponent>;
  let roomFacadeMock: RoomFacade;
  let buildingFacadeMock: BuildingFacade;
  let matDialogRefMock: MatDialogRef<AdminRoomCreateDialogComponent>;
  let matSnackBarMock: MatSnackBar;
  let formErrorsServiceMock: FormErrorsService;
  let roomAdded$: ReplaySubject<Room>;

  beforeEach(() => {
    matDialogRefMock = mock(MatDialogRef);
    matSnackBarMock = mock(MatSnackBar);
    roomFacadeMock = mock(RoomFacade);
    buildingFacadeMock = mock(BuildingFacade);
    formErrorsServiceMock = mock(FormErrorsService);

    roomAdded$ = new ReplaySubject<Room>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatDialogModule, MatButtonModule, MatSnackBarModule, ReactiveFormsModule, MockModule(AdminRoomFormModule)],
        declarations: [AdminRoomCreateDialogComponent],
        providers: [
          providerOf(MatSnackBar, matSnackBarMock),
          providerOf(MatDialogRef, matDialogRefMock),
          providerOf(RoomFacade, roomFacadeMock),
          providerOf(FormErrorsService, formErrorsServiceMock),
          providerOf(BuildingFacade, buildingFacadeMock),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomCreateDialogComponent);
    pageObject = new AdminRoomCreateDialogComponentPo(fixture);
    when(roomFacadeMock.roomAdded$).thenReturn(roomAdded$);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show forms and actions', () => {
    fixture.detectChanges();

    expect(pageObject.adminRoomForm).toBeTruthy();
    expect(pageObject.adminRoomAddText).toBe('Добавить');
    expect(pageObject.adminRoomCancelText).toBe('Отмена');
  });

  it('should call methods services after create room', () => {
    fixture.detectChanges();

    roomAdded$.next(ROOM_STUB);
    fixture.detectChanges();

    verify(buildingFacadeMock.addBuildingRoom(deepEqual({ id: ROOM_STUB.building, room: ROOM_STUB.id }))).once();
    verify(matDialogRefMock.close(true)).once();
    verify(matSnackBarMock.open('Номер успешно создан!', '', deepEqual({ duration: 5000 }))).once();
  });

  it('should call methods services after create room', () => {
    fixture.detectChanges();

    pageObject.triggerAdminRoomAddClick();
    fixture.detectChanges();

    verify(roomFacadeMock.addRoom(deepEqual({} as any))).once();
  });

  it('should call formErrorsService scrollToFirstError', () => {
    fixture.detectChanges();

    pageObject.setFormError();
    pageObject.triggerAdminRoomAddClick();
    fixture.detectChanges();

    verify(formErrorsServiceMock.scrollToFirstError(anything(), deepEqual(ROOMS_IDS))).once();
  });
});
