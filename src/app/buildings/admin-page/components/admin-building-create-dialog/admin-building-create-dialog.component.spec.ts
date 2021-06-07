import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { Building, BUILDINGS_IDS } from '@app/buildings/common';
import { BUILDING_STUB, BuildingFacade } from '@app/buildings/state';
import { FormErrorsService } from '@app/core/forms/errors';
import { providerOf } from '@app/core/testing';
import { PersonFacade } from '@app/persons/state';

import { AdminBuildingFormModule } from '../admin-building-form/admin-building-form.module';
import { AdminBuildingCreateDialogComponent } from './admin-building-create-dialog.component';
import { AdminBuildingCreateDialogComponentPo } from './admin-building-create-dialog.po';

describe('AdminBuildingCreateDialogComponent', () => {
  let pageObject: AdminBuildingCreateDialogComponentPo;
  let fixture: ComponentFixture<AdminBuildingCreateDialogComponent>;
  let buildingFacadeMock: BuildingFacade;
  let personFacadeMock: PersonFacade;
  let matDialogRefMock: MatDialogRef<AdminBuildingCreateDialogComponent>;
  let matSnackBarMock: MatSnackBar;
  let formErrorsServiceMock: FormErrorsService;
  let buildingAdded$: ReplaySubject<Building>;

  beforeEach(() => {
    matDialogRefMock = mock(MatDialogRef);
    matSnackBarMock = mock(MatSnackBar);
    buildingFacadeMock = mock(BuildingFacade);
    personFacadeMock = mock(PersonFacade);
    formErrorsServiceMock = mock(FormErrorsService);

    buildingAdded$ = new ReplaySubject<Building>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatDialogModule, MatButtonModule, MatSnackBarModule, ReactiveFormsModule, MockModule(AdminBuildingFormModule)],
        declarations: [AdminBuildingCreateDialogComponent],
        providers: [
          providerOf(MatSnackBar, matSnackBarMock),
          providerOf(MatDialogRef, matDialogRefMock),
          providerOf(BuildingFacade, buildingFacadeMock),
          providerOf(PersonFacade, personFacadeMock),
          providerOf(FormErrorsService, formErrorsServiceMock),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingCreateDialogComponent);
    pageObject = new AdminBuildingCreateDialogComponentPo(fixture);
    when(buildingFacadeMock.buildingAdded$).thenReturn(buildingAdded$);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show forms and actions', () => {
    fixture.detectChanges();

    expect(pageObject.adminBuildingForm).toBeTruthy();
    expect(pageObject.adminBuildingAddText).toBe('Добавить');
    expect(pageObject.adminBuildingCancelText).toBe('Отмена');
  });

  it('should call methods services after create building', () => {
    fixture.detectChanges();

    buildingAdded$.next(BUILDING_STUB);
    fixture.detectChanges();

    verify(personFacadeMock.addPersonBuilding(deepEqual({ id: BUILDING_STUB.person, building: BUILDING_STUB.id }))).once();
    verify(matDialogRefMock.close(true)).once();
    verify(matSnackBarMock.open('Отель успешно создан!', '', deepEqual({ duration: 5000 }))).once();
  });

  it('should call methods services after create building', () => {
    fixture.detectChanges();

    pageObject.triggerAdminBuildingAddClick();
    fixture.detectChanges();

    verify(buildingFacadeMock.addBuilding(deepEqual({} as any))).once();
  });

  it('should call formErrorsService scrollToFirstError', () => {
    fixture.detectChanges();

    pageObject.setFormError();
    pageObject.triggerAdminBuildingAddClick();
    fixture.detectChanges();

    verify(formErrorsServiceMock.scrollToFirstError(anything(), deepEqual(BUILDINGS_IDS))).once();
  });
});
