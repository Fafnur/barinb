import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointState } from '@angular/cdk/layout/breakpoints-observer';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { BuildingExtended, BuildingManager, BUILDINGS_EXTENDED_STUB } from '@app/buildings/manager';
import { providerOf } from '@app/core/testing';

import { BuildingAdminPageComponent } from './building-admin-page.component';
import { BuildingAdminPageComponentPo } from './building-admin-page.po';
import { AdminBuildingsActionsModule } from './components/admin-buildings-actions/admin-buildings-actions.module';
import { AdminBuildingsListModule } from './components/admin-buildings-list/admin-buildings-list.module';
import { AdminBuildingsTableModule } from './components/admin-buildings-table/admin-buildings-table.module';

describe('BuildingAdminPageComponent', () => {
  let pageObject: BuildingAdminPageComponentPo;
  let fixture: ComponentFixture<BuildingAdminPageComponent>;
  let buildingManagerMock: BuildingManager;
  let buildingsExtended$: ReplaySubject<BuildingExtended[]>;
  let breakpointObserverMock: BreakpointObserver;
  let breakpointObserverMatch$: BehaviorSubject<BreakpointState>;

  beforeEach(() => {
    breakpointObserverMock = mock(BreakpointObserver);
    breakpointObserverMatch$ = new BehaviorSubject<BreakpointState>({
      matches: false,
      breakpoints: {},
    });

    buildingManagerMock = mock(BuildingManager);
    buildingsExtended$ = new ReplaySubject<BuildingExtended[]>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MockModule(AdminBuildingsActionsModule),
          MockModule(AdminBuildingsListModule),
          MockModule(AdminBuildingsTableModule),
        ],
        declarations: [BuildingAdminPageComponent],
        providers: [providerOf(BreakpointObserver, breakpointObserverMock), providerOf(BuildingManager, buildingManagerMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingAdminPageComponent);
    pageObject = new BuildingAdminPageComponentPo(fixture);
    when(breakpointObserverMock.observe(anything())).thenReturn(breakpointObserverMatch$);
    when(buildingManagerMock.buildingsExtended$).thenReturn(buildingsExtended$);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show mobile version', () => {
    fixture.detectChanges();

    buildingsExtended$.next(BUILDINGS_EXTENDED_STUB);
    fixture.detectChanges();

    expect(pageObject.adminBuildingsTable).toBeNull();
    expect(pageObject.adminBuildingsActions).toBeTruthy();
    expect(pageObject.adminBuildingsList).toBeTruthy();
    expect(pageObject.isDesktopScreen).toBeFalsy();
  });

  it('should show desktop version', () => {
    fixture.detectChanges();

    buildingsExtended$.next(BUILDINGS_EXTENDED_STUB);
    breakpointObserverMatch$.next({
      matches: true,
      breakpoints: {},
    });
    fixture.detectChanges();

    expect(pageObject.adminBuildingsTable).toBeTruthy();
    expect(pageObject.adminBuildingsActions).toBeTruthy();
    expect(pageObject.adminBuildingsList).toBeNull();
    expect(pageObject.isDesktopScreen).toBeTruthy();
  });
});
