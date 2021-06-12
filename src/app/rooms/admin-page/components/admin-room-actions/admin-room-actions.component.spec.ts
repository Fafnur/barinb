import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { providerOf } from '@app/core/testing';
import { ROOM_EXTENDED_STUB, RoomExtended, RoomManager } from '@app/rooms/manager';

import { AdminRoomEditDialogComponent } from '../admin-room-edit-dialog/admin-room-edit-dialog.component';
import { AdminRoomEditDialogModule } from '../admin-room-edit-dialog/admin-room-edit-dialog.module';
import { AdminRoomRemoveDialogComponent } from '../admin-room-remove-dialog/admin-room-remove-dialog.component';
import { AdminRoomRemoveDialogModule } from '../admin-room-remove-dialog/admin-room-remove-dialog.module';
import { AdminRoomViewDialogComponent } from '../admin-room-view-dialog/admin-room-view-dialog.component';
import { AdminRoomViewDialogModule } from '../admin-room-view-dialog/admin-room-view-dialog.module';
import { AdminRoomActionsComponent } from './admin-room-actions.component';
import { AdminRoomActionsComponentPo } from './admin-room-actions.po';

@Component({
  template: `<app-admin-room-actions automation-id="booking-portlet" [room]="room"></app-admin-room-actions>`,
})
export class WrapperComponent {
  room = ROOM_EXTENDED_STUB;
}

describe('AdminRoomActionsComponent', () => {
  let pageObject: AdminRoomActionsComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let matDialogMock: MatDialog;
  let roomManagerMock: RoomManager;
  let roomExtended$: ReplaySubject<RoomExtended>;
  let afterClosed$: ReplaySubject<boolean>;

  beforeEach(() => {
    matDialogMock = mock(MatDialog);
    afterClosed$ = new ReplaySubject<boolean>(1);

    roomExtended$ = new ReplaySubject<RoomExtended>(1);
    roomManagerMock = mock(RoomManager);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MatButtonModule,
          MatIconModule,
          MockModule(AdminRoomEditDialogModule),
          MockModule(AdminRoomRemoveDialogModule),
          MockModule(AdminRoomViewDialogModule),
        ],
        declarations: [AdminRoomActionsComponent, WrapperComponent],
        providers: [providerOf(RoomManager, roomManagerMock), providerOf(MatDialog, matDialogMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminRoomActionsComponentPo(fixtureWrapper);
    when(roomManagerMock.roomExtended$(anything())).thenReturn(roomExtended$);
    when(matDialogMock.open(anything(), anything())).thenReturn({ afterClosed: () => afterClosed$ } as any);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show all actions', () => {
    fixtureWrapper.detectChanges();

    roomExtended$.next(ROOM_EXTENDED_STUB);
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomView).toBeTruthy();
    expect(pageObject.adminRoomEdit).toBeTruthy();
    expect(pageObject.adminRoomRemove).toBeTruthy();
  });

  it('should open dialog view', () => {
    fixtureWrapper.detectChanges();

    roomExtended$.next(ROOM_EXTENDED_STUB);
    fixtureWrapper.detectChanges();

    pageObject.triggerAdminRoomViewClick();

    verify(matDialogMock.open(AdminRoomViewDialogComponent, deepEqual({ data: ROOM_EXTENDED_STUB, width: '100%' }))).once();
  });

  it('should open dialog edit', () => {
    fixtureWrapper.detectChanges();

    roomExtended$.next(ROOM_EXTENDED_STUB);
    fixtureWrapper.detectChanges();

    pageObject.triggerAdminRoomEditClick();

    verify(matDialogMock.open(AdminRoomEditDialogComponent, deepEqual({ data: ROOM_EXTENDED_STUB }))).once();
  });

  it('should open dialog remove', () => {
    fixtureWrapper.detectChanges();

    roomExtended$.next(ROOM_EXTENDED_STUB);
    fixtureWrapper.detectChanges();

    pageObject.triggerAdminRoomRemoveClick();
    afterClosed$.next(true);

    verify(matDialogMock.open(AdminRoomRemoveDialogComponent, deepEqual({ data: ROOM_EXTENDED_STUB }))).once();
    verify(roomManagerMock.removeRoom(deepEqual(ROOM_EXTENDED_STUB))).once();
  });
});
