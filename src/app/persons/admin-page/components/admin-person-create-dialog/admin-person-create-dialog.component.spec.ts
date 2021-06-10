import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { FormErrorsService } from '@app/core/forms/errors';
import { providerOf } from '@app/core/testing';
import { Person, PERSONS_IDS } from '@app/persons/common';
import { PERSON_STUB, PersonFacade } from '@app/persons/state';

import { AdminPersonFormModule } from '../admin-person-form/admin-person-form.module';
import { AdminPersonCreateDialogComponent } from './admin-person-create-dialog.component';
import { AdminPersonCreateDialogComponentPo } from './admin-person-create-dialog.po';

describe('AdminPersonCreateDialogComponent', () => {
  let pageObject: AdminPersonCreateDialogComponentPo;
  let fixture: ComponentFixture<AdminPersonCreateDialogComponent>;
  let personFacadeMock: PersonFacade;
  let matDialogRefMock: MatDialogRef<AdminPersonCreateDialogComponent>;
  let matSnackBarMock: MatSnackBar;
  let formErrorsServiceMock: FormErrorsService;
  let personAdded$: ReplaySubject<Person>;

  beforeEach(() => {
    matDialogRefMock = mock(MatDialogRef);
    matSnackBarMock = mock(MatSnackBar);
    personFacadeMock = mock(PersonFacade);
    formErrorsServiceMock = mock(FormErrorsService);

    personAdded$ = new ReplaySubject<Person>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatDialogModule, MatButtonModule, MatSnackBarModule, ReactiveFormsModule, MockModule(AdminPersonFormModule)],
        declarations: [AdminPersonCreateDialogComponent],
        providers: [
          providerOf(MatSnackBar, matSnackBarMock),
          providerOf(MatDialogRef, matDialogRefMock),
          providerOf(PersonFacade, personFacadeMock),
          providerOf(FormErrorsService, formErrorsServiceMock),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonCreateDialogComponent);
    pageObject = new AdminPersonCreateDialogComponentPo(fixture);
    when(personFacadeMock.personAdded$).thenReturn(personAdded$);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show forms and actions', () => {
    fixture.detectChanges();

    expect(pageObject.adminPersonForm).toBeTruthy();
    expect(pageObject.adminPersonAddText).toBe('Добавить');
    expect(pageObject.adminPersonCancelText).toBe('Отмена');
  });

  it('should call methods services after create person', () => {
    fixture.detectChanges();

    personAdded$.next(PERSON_STUB);
    fixture.detectChanges();

    verify(matDialogRefMock.close(true)).once();
    verify(matSnackBarMock.open('Собственник успешно создан!', '', deepEqual({ duration: 5000 }))).once();
  });

  it('should call methods services after create person', () => {
    fixture.detectChanges();

    pageObject.triggerAdminPersonAddClick();
    fixture.detectChanges();

    verify(personFacadeMock.addPerson(deepEqual({} as any))).once();
  });

  it('should call formErrorsService scrollToFirstError', () => {
    fixture.detectChanges();

    pageObject.setFormError();
    pageObject.triggerAdminPersonAddClick();
    fixture.detectChanges();

    verify(formErrorsServiceMock.scrollToFirstError(anything(), deepEqual(PERSONS_IDS))).once();
  });
});
