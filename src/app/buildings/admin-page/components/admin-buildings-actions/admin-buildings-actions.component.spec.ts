import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { anything, mock, verify, when } from 'ts-mockito';

import { BuildingManager } from '@app/buildings/manager';
import { providerOf } from '@app/core/testing';

import { AdminBuildingClearDialogComponent } from '../admin-building-clear-dialog/admin-building-clear-dialog.component';
import { AdminBuildingClearDialogModule } from '../admin-building-clear-dialog/admin-building-clear-dialog.module';
import { AdminBuildingCreateDialogComponent } from '../admin-building-create-dialog/admin-building-create-dialog.component';
import { AdminBuildingCreateDialogModule } from '../admin-building-create-dialog/admin-building-create-dialog.module';
import { AdminBuildingsActionsComponent } from './admin-buildings-actions.component';
import { AdminBuildingsActionsComponentPo } from './admin-buildings-actions.po';

describe('AdminBuildingsActionsComponent', () => {
  let pageObject: AdminBuildingsActionsComponentPo;
  let fixture: ComponentFixture<AdminBuildingsActionsComponent>;
  let buildingManagerMock: BuildingManager;
  let matDialogMock: MatDialog;
  let afterClosed$: ReplaySubject<boolean>;

  beforeEach(() => {
    matDialogMock = mock(MatDialog);
    afterClosed$ = new ReplaySubject<boolean>(1);

    buildingManagerMock = mock(BuildingManager);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MatDialogModule,
          MatButtonModule,
          MatIconModule,
          MockModule(AdminBuildingClearDialogModule),
          MockModule(AdminBuildingCreateDialogModule),
        ],
        declarations: [AdminBuildingsActionsComponent],
        providers: [providerOf(MatDialog, matDialogMock), providerOf(BuildingManager, buildingManagerMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingsActionsComponent);
    pageObject = new AdminBuildingsActionsComponentPo(fixture);
    when(matDialogMock.open(anything())).thenReturn({ afterClosed: () => afterClosed$ } as any);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show actions', () => {
    fixture.detectChanges();

    expect(pageObject.adminBuildingsAddText).toBe('Добавить отель');
    expect(pageObject.adminBuildingsClearText).toBe('Удалить данные');
  });

  it('should open dialog add', () => {
    fixture.detectChanges();

    afterClosed$.next(false);
    pageObject.triggerAdminBuildingsAddClick();
    fixture.detectChanges();

    verify(matDialogMock.open(AdminBuildingCreateDialogComponent)).once();
  });

  it('should open dialog clear', () => {
    fixture.detectChanges();

    pageObject.triggerAdminBuildingsClearClick();
    afterClosed$.next(true);
    fixture.detectChanges();

    verify(matDialogMock.open(AdminBuildingClearDialogComponent)).once();
    verify(buildingManagerMock.clear()).once();
  });
});
