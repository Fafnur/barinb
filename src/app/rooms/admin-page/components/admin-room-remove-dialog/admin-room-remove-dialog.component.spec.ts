import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { mock, verify } from 'ts-mockito';

import { providerOf } from '@app/core/testing';
import { ROOM_EXTENDED_STUB } from '@app/rooms/manager';

import { AdminRoomEditDialogComponent } from '../admin-room-edit-dialog/admin-room-edit-dialog.component';
import { AdminRoomRemoveDialogComponent } from './admin-room-remove-dialog.component';
import { AdminRoomRemoveDialogComponentPo } from './admin-room-remove-dialog.po';

describe('AdminRoomRemoveDialogComponent', () => {
  let pageObject: AdminRoomRemoveDialogComponentPo;
  let fixture: ComponentFixture<AdminRoomRemoveDialogComponent>;
  let matDialogRefMock: MatDialogRef<AdminRoomEditDialogComponent>;

  beforeEach(() => {
    matDialogRefMock = mock(MatDialogRef);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatDialogModule, MatButtonModule],
        declarations: [AdminRoomRemoveDialogComponent],
        providers: [
          providerOf(MatDialogRef, matDialogRefMock),
          {
            provide: MAT_DIALOG_DATA,
            useValue: ROOM_EXTENDED_STUB,
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomRemoveDialogComponent);
    pageObject = new AdminRoomRemoveDialogComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show forms and actions', () => {
    fixture.detectChanges();

    expect(pageObject.adminRoomTitleText).toBe('Внимание');
    expect(pageObject.adminRoomContentText).toBe(`Вы действительно хотите удалить номер № ${ROOM_EXTENDED_STUB.id}?`);
    expect(pageObject.adminRoomCancelText).toBe('Нет');
    expect(pageObject.adminRoomRemoveText).toBe('Да');
  });

  it('should set call dialog close with false', () => {
    fixture.detectChanges();

    pageObject.triggerAdminRoomCancelClick();
    fixture.detectChanges();

    verify(matDialogRefMock.close(false)).once();
  });

  it('should set call dialog close with true', () => {
    fixture.detectChanges();

    pageObject.triggerAdminRoomRemoveClick();
    fixture.detectChanges();

    verify(matDialogRefMock.close(true)).once();
  });
});
