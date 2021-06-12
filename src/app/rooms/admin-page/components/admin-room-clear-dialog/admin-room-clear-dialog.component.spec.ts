import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { mock, verify } from 'ts-mockito';

import { providerOf } from '@app/core/testing';

import { AdminRoomClearDialogComponent } from './admin-room-clear-dialog.component';
import { AdminRoomClearDialogComponentPo } from './admin-room-clear-dialog.po';

describe('AdminRoomClearDialogComponent', () => {
  let pageObject: AdminRoomClearDialogComponentPo;
  let fixture: ComponentFixture<AdminRoomClearDialogComponent>;
  let matDialogRefMock: MatDialogRef<AdminRoomClearDialogComponent>;

  beforeEach(() => {
    matDialogRefMock = mock(MatDialogRef);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatButtonModule, MatDialogModule],
        declarations: [AdminRoomClearDialogComponent],
        providers: [providerOf(MatDialogRef, matDialogRefMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomClearDialogComponent);
    pageObject = new AdminRoomClearDialogComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should set component title, content and buttons', () => {
    fixture.detectChanges();

    expect(pageObject.adminRoomClearDialogTitleText).toBe('Внимание');
    expect(pageObject.adminRoomClearDialogContentText).toBe('Вы действительно хотите удалить все номера?');
    expect(pageObject.adminRoomClearDialogCancelText).toBe('Нет');
    expect(pageObject.adminRoomClearDialogSuccessText).toBe('Да');
  });

  it('should set call dialog close with false', () => {
    fixture.detectChanges();

    pageObject.triggerAdminRoomClearDialogCancelClick();
    fixture.detectChanges();

    verify(matDialogRefMock.close(false)).once();
  });

  it('should set call dialog close with true', () => {
    fixture.detectChanges();

    pageObject.triggerAdminRoomClearDialogSuccessClick();
    fixture.detectChanges();

    verify(matDialogRefMock.close(true)).once();
  });
});
