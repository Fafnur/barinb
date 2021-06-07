import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { mock, verify } from 'ts-mockito';

import { BUILDING_EXTENDED_STUB } from '@app/buildings/manager';
import { providerOf } from '@app/core/testing';

import { AdminBuildingEditDialogComponent } from '../admin-building-edit-dialog/admin-building-edit-dialog.component';
import { AdminBuildingRemoveDialogComponent } from './admin-building-remove-dialog.component';
import { AdminBuildingRemoveDialogComponentPo } from './admin-building-remove-dialog.po';

describe('AdminBuildingRemoveDialogComponent', () => {
  let pageObject: AdminBuildingRemoveDialogComponentPo;
  let fixture: ComponentFixture<AdminBuildingRemoveDialogComponent>;
  let matDialogRefMock: MatDialogRef<AdminBuildingEditDialogComponent>;

  beforeEach(() => {
    matDialogRefMock = mock(MatDialogRef);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatDialogModule, MatButtonModule],
        declarations: [AdminBuildingRemoveDialogComponent],
        providers: [
          providerOf(MatDialogRef, matDialogRefMock),
          {
            provide: MAT_DIALOG_DATA,
            useValue: BUILDING_EXTENDED_STUB,
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingRemoveDialogComponent);
    pageObject = new AdminBuildingRemoveDialogComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show forms and actions', () => {
    fixture.detectChanges();

    expect(pageObject.adminBuildingTitleText).toBe('Внимание');
    expect(pageObject.adminBuildingContentText).toBe(`Вы действительно хотите удалить номер № ${BUILDING_EXTENDED_STUB.id}?`);
    expect(pageObject.adminBuildingCancelText).toBe('Нет');
    expect(pageObject.adminBuildingRemoveText).toBe('Да');
  });

  it('should set call dialog close with false', () => {
    fixture.detectChanges();

    pageObject.triggerAdminBuildingCancelClick();
    fixture.detectChanges();

    verify(matDialogRefMock.close(false)).once();
  });

  it('should set call dialog close with true', () => {
    fixture.detectChanges();

    pageObject.triggerAdminBuildingRemoveClick();
    fixture.detectChanges();

    verify(matDialogRefMock.close(true)).once();
  });
});
