import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { anything, deepEqual, mock, verify, when } from 'ts-mockito';

import { BUILDING_EXTENDED_STUB, BuildingExtended, BuildingManager } from '@app/buildings/manager';
import { providerOf } from '@app/core/testing';

import { AdminBuildingEditDialogComponent } from '../admin-building-edit-dialog/admin-building-edit-dialog.component';
import { AdminBuildingEditDialogModule } from '../admin-building-edit-dialog/admin-building-edit-dialog.module';
import { AdminBuildingRemoveDialogComponent } from '../admin-building-remove-dialog/admin-building-remove-dialog.component';
import { AdminBuildingRemoveDialogModule } from '../admin-building-remove-dialog/admin-building-remove-dialog.module';
import { AdminBuildingViewDialogComponent } from '../admin-building-view-dialog/admin-building-view-dialog.component';
import { AdminBuildingViewDialogModule } from '../admin-building-view-dialog/admin-building-view-dialog.module';
import { AdminBuildingActionsComponent } from './admin-building-actions.component';
import { AdminBuildingActionsComponentPo } from './admin-building-actions.po';

@Component({
  template: `<app-admin-building-actions automation-id="booking-portlet" [building]="building"></app-admin-building-actions>`,
})
class WrapperComponent {
  building = BUILDING_EXTENDED_STUB;
}

describe('AdminBuildingActionsComponent', () => {
  let pageObject: AdminBuildingActionsComponentPo<WrapperComponent>;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let matDialogMock: MatDialog;
  let buildingManagerMock: BuildingManager;
  let buildingExtended$: ReplaySubject<BuildingExtended>;
  let afterClosed$: ReplaySubject<boolean>;

  beforeEach(() => {
    matDialogMock = mock(MatDialog);
    afterClosed$ = new ReplaySubject<boolean>(1);

    buildingExtended$ = new ReplaySubject<BuildingExtended>(1);
    buildingManagerMock = mock(BuildingManager);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MatButtonModule,
          MatIconModule,
          MockModule(AdminBuildingEditDialogModule),
          MockModule(AdminBuildingRemoveDialogModule),
          MockModule(AdminBuildingViewDialogModule),
        ],
        declarations: [AdminBuildingActionsComponent, WrapperComponent],
        providers: [providerOf(BuildingManager, buildingManagerMock), providerOf(MatDialog, matDialogMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminBuildingActionsComponentPo(fixtureWrapper);
    when(buildingManagerMock.buildingExtended$(anything())).thenReturn(buildingExtended$);
    when(matDialogMock.open(anything(), anything())).thenReturn({ afterClosed: () => afterClosed$ } as any);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show all actions', () => {
    fixtureWrapper.detectChanges();

    buildingExtended$.next(BUILDING_EXTENDED_STUB);
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingView).toBeTruthy();
    expect(pageObject.adminBuildingEdit).toBeTruthy();
    expect(pageObject.adminBuildingRemove).toBeTruthy();
  });

  it('should open dialog view', () => {
    fixtureWrapper.detectChanges();

    buildingExtended$.next(BUILDING_EXTENDED_STUB);
    fixtureWrapper.detectChanges();

    pageObject.triggerAdminBuildingViewClick();

    verify(matDialogMock.open(AdminBuildingViewDialogComponent, deepEqual({ data: BUILDING_EXTENDED_STUB, width: '100%' }))).once();
  });

  it('should open dialog edit', () => {
    fixtureWrapper.detectChanges();

    buildingExtended$.next(BUILDING_EXTENDED_STUB);
    fixtureWrapper.detectChanges();

    pageObject.triggerAdminBuildingEditClick();

    verify(matDialogMock.open(AdminBuildingEditDialogComponent, deepEqual({ data: BUILDING_EXTENDED_STUB }))).once();
  });

  it('should open dialog remove', () => {
    fixtureWrapper.detectChanges();

    buildingExtended$.next(BUILDING_EXTENDED_STUB);
    fixtureWrapper.detectChanges();

    pageObject.triggerAdminBuildingRemoveClick();
    afterClosed$.next(true);

    verify(matDialogMock.open(AdminBuildingRemoveDialogComponent, deepEqual({ data: BUILDING_EXTENDED_STUB }))).once();
    verify(buildingManagerMock.removeBuilding(deepEqual(BUILDING_EXTENDED_STUB))).once();
  });
});
