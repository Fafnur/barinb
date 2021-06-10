import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { anything, mock, verify, when } from 'ts-mockito';

import { providerOf } from '@app/core/testing';
import { PersonManager } from '@app/persons/manager';

import { AdminPersonClearDialogComponent } from '../admin-person-clear-dialog/admin-person-clear-dialog.component';
import { AdminPersonClearDialogModule } from '../admin-person-clear-dialog/admin-person-clear-dialog.module';
import { AdminPersonCreateDialogComponent } from '../admin-person-create-dialog/admin-person-create-dialog.component';
import { AdminPersonCreateDialogModule } from '../admin-person-create-dialog/admin-person-create-dialog.module';
import { AdminPersonsActionsComponent } from './admin-persons-actions.component';
import { AdminPersonsActionsComponentPo } from './admin-persons-actions.po';

describe('AdminPersonsActionsComponent', () => {
  let pageObject: AdminPersonsActionsComponentPo;
  let fixture: ComponentFixture<AdminPersonsActionsComponent>;
  let personManagerMock: PersonManager;
  let matDialogMock: MatDialog;
  let afterClosed$: ReplaySubject<boolean>;

  beforeEach(() => {
    matDialogMock = mock(MatDialog);
    afterClosed$ = new ReplaySubject<boolean>(1);

    personManagerMock = mock(PersonManager);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MatDialogModule,
          MatButtonModule,
          MatIconModule,
          MockModule(AdminPersonClearDialogModule),
          MockModule(AdminPersonCreateDialogModule),
        ],
        declarations: [AdminPersonsActionsComponent],
        providers: [providerOf(MatDialog, matDialogMock), providerOf(PersonManager, personManagerMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonsActionsComponent);
    pageObject = new AdminPersonsActionsComponentPo(fixture);
    when(matDialogMock.open(anything())).thenReturn({ afterClosed: () => afterClosed$ } as any);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show actions', () => {
    fixture.detectChanges();

    expect(pageObject.adminPersonsAddText).toBe('Добавить собственника');
    expect(pageObject.adminPersonsClearText).toBe('Удалить данные');
  });

  it('should open dialog add', () => {
    fixture.detectChanges();

    afterClosed$.next(false);
    pageObject.triggerAdminPersonsAddClick();
    fixture.detectChanges();

    verify(matDialogMock.open(AdminPersonCreateDialogComponent)).once();
  });

  it('should open dialog clear', () => {
    fixture.detectChanges();

    pageObject.triggerAdminPersonsClearClick();
    afterClosed$.next(true);
    fixture.detectChanges();

    verify(matDialogMock.open(AdminPersonClearDialogComponent)).once();
    verify(personManagerMock.clear()).once();
  });
});
