import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointState } from '@angular/cdk/layout/breakpoints-observer';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { providerOf } from '@app/core/testing';
import { PersonExtended, PersonManager, PERSONS_EXTENDED_STUB } from '@app/persons/manager';

import { AdminPersonsActionsModule } from './components/admin-persons-actions/admin-persons-actions.module';
import { AdminPersonsListModule } from './components/admin-persons-list/admin-persons-list.module';
import { AdminPersonsTableModule } from './components/admin-persons-table/admin-persons-table.module';
import { PersonAdminPageComponent } from './person-admin-page.component';
import { PersonAdminPageComponentPo } from './person-admin-page.po';

describe('PersonAdminPageComponent', () => {
  let pageObject: PersonAdminPageComponentPo;
  let fixture: ComponentFixture<PersonAdminPageComponent>;
  let personManagerMock: PersonManager;
  let personsExtended$: ReplaySubject<PersonExtended[]>;
  let breakpointObserverMock: BreakpointObserver;
  let breakpointObserverMatch$: BehaviorSubject<BreakpointState>;

  beforeEach(() => {
    breakpointObserverMock = mock(BreakpointObserver);
    breakpointObserverMatch$ = new BehaviorSubject<BreakpointState>({
      matches: false,
      breakpoints: {},
    });

    personManagerMock = mock(PersonManager);
    personsExtended$ = new ReplaySubject<PersonExtended[]>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MockModule(AdminPersonsActionsModule),
          MockModule(AdminPersonsListModule),
          MockModule(AdminPersonsTableModule),
        ],
        declarations: [PersonAdminPageComponent],
        providers: [providerOf(BreakpointObserver, breakpointObserverMock), providerOf(PersonManager, personManagerMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonAdminPageComponent);
    pageObject = new PersonAdminPageComponentPo(fixture);
    when(breakpointObserverMock.observe(anything())).thenReturn(breakpointObserverMatch$);
    when(personManagerMock.personsExtended$).thenReturn(personsExtended$);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show mobile version', () => {
    fixture.detectChanges();

    personsExtended$.next(PERSONS_EXTENDED_STUB);
    fixture.detectChanges();

    expect(pageObject.adminPersonsTable).toBeNull();
    expect(pageObject.adminPersonsActions).toBeTruthy();
    expect(pageObject.adminPersonsList).toBeTruthy();
    expect(pageObject.isDesktopScreen).toBeFalsy();
  });

  it('should show desktop version', () => {
    fixture.detectChanges();

    personsExtended$.next(PERSONS_EXTENDED_STUB);
    breakpointObserverMatch$.next({
      matches: true,
      breakpoints: {},
    });
    fixture.detectChanges();

    expect(pageObject.adminPersonsTable).toBeTruthy();
    expect(pageObject.adminPersonsActions).toBeTruthy();
    expect(pageObject.adminPersonsList).toBeNull();
    expect(pageObject.isDesktopScreen).toBeTruthy();
  });
});
