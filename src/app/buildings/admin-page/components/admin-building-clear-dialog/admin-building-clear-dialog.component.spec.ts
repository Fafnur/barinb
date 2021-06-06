import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { mock, verify } from 'ts-mockito';

import { providerOf } from '@app/core/testing';

import { AdminBuildingClearDialogComponent } from './admin-building-clear-dialog.component';
import { AdminBuildingClearDialogComponentPo } from './admin-building-clear-dialog.po';

describe('AdminBuildingClearDialogComponent', () => {
  let pageObject: AdminBuildingClearDialogComponentPo;
  let fixture: ComponentFixture<AdminBuildingClearDialogComponent>;
  let matDialogRefMock: MatDialogRef<AdminBuildingClearDialogComponent>;

  beforeEach(() => {
    matDialogRefMock = mock(MatDialogRef);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatButtonModule, MatDialogModule],
        declarations: [AdminBuildingClearDialogComponent],
        providers: [providerOf(MatDialogRef, matDialogRefMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingClearDialogComponent);
    pageObject = new AdminBuildingClearDialogComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should set component title, content and buttons', () => {
    fixture.detectChanges();

    expect(pageObject.adminBuildingClearDialogTitleText).toBe('Внимание');
    expect(pageObject.adminBuildingClearDialogContentText).toBe('Вы действительно хотите удалить все отели?');
    expect(pageObject.adminBuildingClearDialogCancelText).toBe('Нет');
    expect(pageObject.adminBuildingClearDialogSuccessText).toBe('Да');
  });

  it('should set call dialog close with false', () => {
    fixture.detectChanges();

    pageObject.triggerAdminBuildingClearDialogCancelClick();
    fixture.detectChanges();

    verify(matDialogRefMock.close(false)).once();
  });

  it('should set call dialog close with true', () => {
    fixture.detectChanges();

    pageObject.triggerAdminBuildingClearDialogSuccessClick();
    fixture.detectChanges();

    verify(matDialogRefMock.close(true)).once();
  });
});
