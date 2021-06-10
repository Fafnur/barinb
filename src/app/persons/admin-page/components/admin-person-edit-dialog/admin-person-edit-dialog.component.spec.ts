import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MockComponents } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { FormErrorsService } from '@app/core/forms/errors';
import { providerOf } from '@app/core/testing';
import { ChangedPerson, PERSONS_IDS } from '@app/persons/common';
import { PERSON_EXTENDED_STUB } from '@app/persons/manager';
import { CHANGED_PERSON_STUB, PersonFacade } from '@app/persons/state';

import { AdminPersonFormComponent } from '../admin-person-form/admin-person-form.component';
import { AdminPersonEditDialogComponent } from './admin-person-edit-dialog.component';
import { AdminPersonEditDialogComponentPo } from './admin-person-edit-dialog.po';

describe('AdminPersonEditDialogComponent', () => {
  let pageObject: AdminPersonEditDialogComponentPo;
  let fixture: ComponentFixture<AdminPersonEditDialogComponent>;
  let personFacadeMock: PersonFacade;
  let matDialogRefMock: MatDialogRef<AdminPersonEditDialogComponent>;
  let matSnackBarMock: MatSnackBar;
  let formErrorsServiceMock: FormErrorsService;
  let personChanged$: ReplaySubject<ChangedPerson>;

  beforeEach(() => {
    matDialogRefMock = mock(MatDialogRef);
    matSnackBarMock = mock(MatSnackBar);
    personFacadeMock = mock(PersonFacade);
    formErrorsServiceMock = mock(FormErrorsService);

    personChanged$ = new ReplaySubject<ChangedPerson>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatButtonModule, MatSnackBarModule, ReactiveFormsModule],
      declarations: [AdminPersonEditDialogComponent, MockComponents(AdminPersonFormComponent)],
      providers: [
        providerOf(MatSnackBar, matSnackBarMock),
        providerOf(MatDialogRef, matDialogRefMock),
        providerOf(PersonFacade, personFacadeMock),
        providerOf(FormErrorsService, formErrorsServiceMock),
        {
          provide: MAT_DIALOG_DATA,
          useValue: PERSON_EXTENDED_STUB,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonEditDialogComponent);
    pageObject = new AdminPersonEditDialogComponentPo(fixture);
    when(personFacadeMock.personChanged$).thenReturn(personChanged$);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show forms and actions', () => {
    fixture.detectChanges();

    expect(pageObject.adminPersonForm).toBeTruthy();
    expect(pageObject.adminPersonChangeText).toBe('Изменить');
    expect(pageObject.adminPersonCancelText).toBe('Отмена');
  });

  it('should call methods services after create person', () => {
    fixture.detectChanges();

    personChanged$.next(CHANGED_PERSON_STUB);
    fixture.detectChanges();

    verify(matDialogRefMock.close(true)).once();
    verify(matSnackBarMock.open('Собственник успешно изменен!', '', deepEqual({ duration: 5000 }))).once();
  });

  it('should call methods services after create person', () => {
    fixture.detectChanges();

    pageObject.triggerAdminPersonChangeClick();
    fixture.detectChanges();

    verify(personFacadeMock.changePerson(deepEqual({ id: PERSON_EXTENDED_STUB.id }))).once();
  });

  it('should call formErrorsService scrollToFirstError', () => {
    fixture.detectChanges();

    pageObject.setFormError();
    pageObject.triggerAdminPersonChangeClick();
    fixture.detectChanges();

    verify(formErrorsServiceMock.scrollToFirstError(anything(), deepEqual(PERSONS_IDS))).once();
  });
});
