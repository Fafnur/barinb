import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { mock, verify } from 'ts-mockito';

import { providerOf } from '@app/core/testing';

import { AdminPersonClearDialogComponent } from './admin-person-clear-dialog.component';
import { AdminPersonClearDialogComponentPo } from './admin-person-clear-dialog.po';

describe('AdminPersonClearDialogComponent', () => {
  let pageObject: AdminPersonClearDialogComponentPo;
  let fixture: ComponentFixture<AdminPersonClearDialogComponent>;
  let matDialogRefMock: MatDialogRef<AdminPersonClearDialogComponent>;

  beforeEach(() => {
    matDialogRefMock = mock(MatDialogRef);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatButtonModule, MatDialogModule],
        declarations: [AdminPersonClearDialogComponent],
        providers: [providerOf(MatDialogRef, matDialogRefMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonClearDialogComponent);
    pageObject = new AdminPersonClearDialogComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should set component title, content and buttons', () => {
    fixture.detectChanges();

    expect(pageObject.adminPersonClearDialogTitleText).toBe('Внимание');
    expect(pageObject.adminPersonClearDialogContentText).toBe('Вы действительно хотите удалить всех собственников?');
    expect(pageObject.adminPersonClearDialogCancelText).toBe('Нет');
    expect(pageObject.adminPersonClearDialogSuccessText).toBe('Да');
  });

  it('should set call dialog close with false', () => {
    fixture.detectChanges();

    pageObject.triggerAdminPersonClearDialogCancelClick();
    fixture.detectChanges();

    verify(matDialogRefMock.close(false)).once();
  });

  it('should set call dialog close with true', () => {
    fixture.detectChanges();

    pageObject.triggerAdminPersonClearDialogSuccessClick();
    fixture.detectChanges();

    verify(matDialogRefMock.close(true)).once();
  });
});
