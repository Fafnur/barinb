import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { anything, mock, verify, when } from 'ts-mockito';

import { providerOf } from '@app/core/testing';
import { RoomManager } from '@app/rooms/manager';

import { AdminRoomClearDialogComponent } from '../admin-room-clear-dialog/admin-room-clear-dialog.component';
import { AdminRoomClearDialogModule } from '../admin-room-clear-dialog/admin-room-clear-dialog.module';
import { AdminRoomCreateDialogComponent } from '../admin-room-create-dialog/admin-room-create-dialog.component';
import { AdminRoomCreateDialogModule } from '../admin-room-create-dialog/admin-room-create-dialog.module';
import { AdminRoomsActionsComponent } from './admin-rooms-actions.component';
import { AdminRoomsActionsComponentPo } from './admin-rooms-actions.po';

describe('AdminRoomsActionsComponent', () => {
  let pageObject: AdminRoomsActionsComponentPo;
  let fixture: ComponentFixture<AdminRoomsActionsComponent>;
  let roomManagerMock: RoomManager;
  let matDialogMock: MatDialog;
  let afterClosed$: ReplaySubject<boolean>;

  beforeEach(() => {
    matDialogMock = mock(MatDialog);
    afterClosed$ = new ReplaySubject<boolean>(1);

    roomManagerMock = mock(RoomManager);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MatDialogModule,
          MatButtonModule,
          MatIconModule,
          MockModule(AdminRoomClearDialogModule),
          MockModule(AdminRoomCreateDialogModule),
        ],
        declarations: [AdminRoomsActionsComponent],
        providers: [providerOf(MatDialog, matDialogMock), providerOf(RoomManager, roomManagerMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomsActionsComponent);
    pageObject = new AdminRoomsActionsComponentPo(fixture);
    when(matDialogMock.open(anything())).thenReturn({ afterClosed: () => afterClosed$ } as any);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show actions', () => {
    fixture.detectChanges();

    expect(pageObject.adminRoomsAddText).toBe('Добавить номер');
    expect(pageObject.adminRoomsClearText).toBe('Удалить данные');
  });

  it('should open dialog add', () => {
    fixture.detectChanges();

    afterClosed$.next(false);
    pageObject.triggerAdminRoomsAddClick();
    fixture.detectChanges();

    verify(matDialogMock.open(AdminRoomCreateDialogComponent)).once();
  });

  it('should open dialog clear', () => {
    fixture.detectChanges();

    pageObject.triggerAdminRoomsClearClick();
    afterClosed$.next(true);
    fixture.detectChanges();

    verify(matDialogMock.open(AdminRoomClearDialogComponent)).once();
    verify(roomManagerMock.clear()).once();
  });
});
