import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { providerOf } from '@app/core/testing';
import { PERSON_EXTENDED_STUB, PersonExtended, PersonManager } from '@app/persons/manager';

import { AdminPersonEditDialogComponent } from '../admin-person-edit-dialog/admin-person-edit-dialog.component';
import { AdminPersonEditDialogModule } from '../admin-person-edit-dialog/admin-person-edit-dialog.module';
import { AdminPersonRemoveDialogComponent } from '../admin-person-remove-dialog/admin-person-remove-dialog.component';
import { AdminPersonRemoveDialogModule } from '../admin-person-remove-dialog/admin-person-remove-dialog.module';
import { AdminPersonViewDialogComponent } from '../admin-person-view-dialog/admin-person-view-dialog.component';
import { AdminPersonViewDialogModule } from '../admin-person-view-dialog/admin-person-view-dialog.module';
import { AdminPersonActionsComponent } from './admin-person-actions.component';
import { AdminPersonActionsComponentPo } from './admin-person-actions.po';

@Component({
  template: `<app-admin-person-actions automation-id="booking-portlet" [person]="person"></app-admin-person-actions>`,
})
class WrapperComponent {
  person = PERSON_EXTENDED_STUB;
}

describe('AdminPersonActionsComponent', () => {
  let pageObject: AdminPersonActionsComponentPo<WrapperComponent>;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let matDialogMock: MatDialog;
  let personManagerMock: PersonManager;
  let personExtended$: ReplaySubject<PersonExtended>;
  let afterClosed$: ReplaySubject<boolean>;

  beforeEach(() => {
    matDialogMock = mock(MatDialog);
    afterClosed$ = new ReplaySubject<boolean>(1);

    personExtended$ = new ReplaySubject<PersonExtended>(1);
    personManagerMock = mock(PersonManager);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MatButtonModule,
          MatIconModule,
          MockModule(AdminPersonEditDialogModule),
          MockModule(AdminPersonRemoveDialogModule),
          MockModule(AdminPersonViewDialogModule),
        ],
        declarations: [AdminPersonActionsComponent, WrapperComponent],
        providers: [providerOf(PersonManager, personManagerMock), providerOf(MatDialog, matDialogMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminPersonActionsComponentPo(fixtureWrapper);
    when(personManagerMock.personExtended$(anything())).thenReturn(personExtended$);
    when(matDialogMock.open(anything(), anything())).thenReturn({ afterClosed: () => afterClosed$ } as any);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show all actions', () => {
    fixtureWrapper.detectChanges();

    personExtended$.next(PERSON_EXTENDED_STUB);
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonView).toBeTruthy();
    expect(pageObject.adminPersonEdit).toBeTruthy();
    expect(pageObject.adminPersonRemove).toBeTruthy();
  });

  it('should open dialog view', () => {
    fixtureWrapper.detectChanges();

    personExtended$.next(PERSON_EXTENDED_STUB);
    fixtureWrapper.detectChanges();

    pageObject.triggerAdminPersonViewClick();

    verify(matDialogMock.open(AdminPersonViewDialogComponent, deepEqual({ data: PERSON_EXTENDED_STUB, width: '100%' }))).once();
  });

  it('should open dialog edit', () => {
    fixtureWrapper.detectChanges();

    personExtended$.next(PERSON_EXTENDED_STUB);
    fixtureWrapper.detectChanges();

    pageObject.triggerAdminPersonEditClick();

    verify(matDialogMock.open(AdminPersonEditDialogComponent, deepEqual({ data: PERSON_EXTENDED_STUB }))).once();
  });

  it('should open dialog remove', () => {
    fixtureWrapper.detectChanges();

    personExtended$.next(PERSON_EXTENDED_STUB);
    fixtureWrapper.detectChanges();

    pageObject.triggerAdminPersonRemoveClick();
    afterClosed$.next(true);

    verify(matDialogMock.open(AdminPersonRemoveDialogComponent, deepEqual({ data: PERSON_EXTENDED_STUB }))).once();
    verify(personManagerMock.removePerson(deepEqual(PERSON_EXTENDED_STUB))).once();
  });
});
