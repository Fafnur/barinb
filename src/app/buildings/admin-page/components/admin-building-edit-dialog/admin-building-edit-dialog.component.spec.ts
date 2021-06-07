import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MockComponents } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { BUILDINGS_IDS, ChangedBuilding } from '@app/buildings/common';
import { BUILDING_EXTENDED_STUB } from '@app/buildings/manager';
import { BuildingFacade, CHANGED_BUILDING_STUB } from '@app/buildings/state';
import { FormErrorsService } from '@app/core/forms/errors';
import { providerOf } from '@app/core/testing';

import { AdminBuildingFormComponent } from '../admin-building-form/admin-building-form.component';
import { AdminBuildingEditDialogComponent } from './admin-building-edit-dialog.component';
import { AdminBuildingEditDialogComponentPo } from './admin-building-edit-dialog.po';

describe('AdminBuildingEditDialogComponent', () => {
  let pageObject: AdminBuildingEditDialogComponentPo;
  let fixture: ComponentFixture<AdminBuildingEditDialogComponent>;
  let buildingFacadeMock: BuildingFacade;
  let matDialogRefMock: MatDialogRef<AdminBuildingEditDialogComponent>;
  let matSnackBarMock: MatSnackBar;
  let formErrorsServiceMock: FormErrorsService;
  let buildingChanged$: ReplaySubject<ChangedBuilding>;

  beforeEach(() => {
    matDialogRefMock = mock(MatDialogRef);
    matSnackBarMock = mock(MatSnackBar);
    buildingFacadeMock = mock(BuildingFacade);
    formErrorsServiceMock = mock(FormErrorsService);

    buildingChanged$ = new ReplaySubject<ChangedBuilding>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatButtonModule, MatSnackBarModule, ReactiveFormsModule],
      declarations: [AdminBuildingEditDialogComponent, MockComponents(AdminBuildingFormComponent)],
      providers: [
        providerOf(MatSnackBar, matSnackBarMock),
        providerOf(MatDialogRef, matDialogRefMock),
        providerOf(BuildingFacade, buildingFacadeMock),
        providerOf(FormErrorsService, formErrorsServiceMock),
        {
          provide: MAT_DIALOG_DATA,
          useValue: BUILDING_EXTENDED_STUB,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingEditDialogComponent);
    pageObject = new AdminBuildingEditDialogComponentPo(fixture);
    when(buildingFacadeMock.buildingChanged$).thenReturn(buildingChanged$);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show forms and actions', () => {
    fixture.detectChanges();

    expect(pageObject.adminBuildingForm).toBeTruthy();
    expect(pageObject.adminBuildingChangeText).toBe('Изменить');
    expect(pageObject.adminBuildingCancelText).toBe('Отмена');
  });

  it('should call methods services after create building', () => {
    fixture.detectChanges();

    buildingChanged$.next(CHANGED_BUILDING_STUB);
    fixture.detectChanges();

    verify(matDialogRefMock.close(true)).once();
    verify(matSnackBarMock.open('Здание успешно изменено!', '', deepEqual({ duration: 5000 }))).once();
  });

  it('should call methods services after create building', () => {
    fixture.detectChanges();

    pageObject.triggerAdminBuildingChangeClick();
    fixture.detectChanges();

    verify(buildingFacadeMock.changeBuilding(deepEqual({ id: BUILDING_EXTENDED_STUB.id }))).once();
  });

  it('should call formErrorsService scrollToFirstError', () => {
    fixture.detectChanges();

    pageObject.setFormError();
    pageObject.triggerAdminBuildingChangeClick();
    fixture.detectChanges();

    verify(formErrorsServiceMock.scrollToFirstError(anything(), deepEqual(BUILDINGS_IDS))).once();
  });
});
