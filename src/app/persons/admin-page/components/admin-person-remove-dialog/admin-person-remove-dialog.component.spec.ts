import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { mock, verify } from 'ts-mockito';

import { providerOf } from '@app/core/testing';
import { PERSON_EXTENDED_STUB } from '@app/persons/manager';

import { AdminPersonEditDialogComponent } from '../admin-person-edit-dialog/admin-person-edit-dialog.component';
import { AdminPersonRemoveDialogComponent } from './admin-person-remove-dialog.component';
import { AdminPersonRemoveDialogComponentPo } from './admin-person-remove-dialog.po';

describe('AdminPersonRemoveDialogComponent', () => {
  let pageObject: AdminPersonRemoveDialogComponentPo;
  let fixture: ComponentFixture<AdminPersonRemoveDialogComponent>;
  let matDialogRefMock: MatDialogRef<AdminPersonEditDialogComponent>;

  beforeEach(() => {
    matDialogRefMock = mock(MatDialogRef);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatDialogModule, MatButtonModule],
        declarations: [AdminPersonRemoveDialogComponent],
        providers: [
          providerOf(MatDialogRef, matDialogRefMock),
          {
            provide: MAT_DIALOG_DATA,
            useValue: PERSON_EXTENDED_STUB,
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonRemoveDialogComponent);
    pageObject = new AdminPersonRemoveDialogComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show forms and actions', () => {
    fixture.detectChanges();

    expect(pageObject.adminPersonTitleText).toBe('Внимание');
    expect(pageObject.adminPersonContentText).toBe(`Вы действительно хотите удалить собственника № ${PERSON_EXTENDED_STUB.id}?`);
    expect(pageObject.adminPersonCancelText).toBe('Нет');
    expect(pageObject.adminPersonRemoveText).toBe('Да');
  });

  it('should set call dialog close with false', () => {
    fixture.detectChanges();

    pageObject.triggerAdminPersonCancelClick();
    fixture.detectChanges();

    verify(matDialogRefMock.close(false)).once();
  });

  it('should set call dialog close with true', () => {
    fixture.detectChanges();

    pageObject.triggerAdminPersonRemoveClick();
    fixture.detectChanges();

    verify(matDialogRefMock.close(true)).once();
  });
});
