import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminViewSharedModule } from '@app/admin/view/shared';
import { BUILDING_EXTENDED_STUB } from '@app/buildings/manager';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { PersonSharedModule } from '@app/persons/shared';

import { AdminBuildingViewDialogComponent } from './admin-building-view-dialog.component';
import { AdminBuildingViewDialogComponentPo } from './admin-building-view-dialog.po';

describe('AdminBuildingViewDialogComponent', () => {
  let pageObject: AdminBuildingViewDialogComponentPo;
  let fixture: ComponentFixture<AdminBuildingViewDialogComponent>;
  let datePipe: DatePipe;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatDialogModule,
          MatButtonModule,
          PersonSharedModule,
          AdminViewSharedModule,
          PersonSharedModule,
          NavigationSharedModule,
        ],
        declarations: [AdminBuildingViewDialogComponent],
        providers: [
          {
            provide: MAT_DIALOG_DATA,
            useValue: BUILDING_EXTENDED_STUB,
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingViewDialogComponent);
    pageObject = new AdminBuildingViewDialogComponentPo(fixture);
    datePipe = new DatePipe('en');
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should set building name', () => {
    fixture.detectChanges();

    expect(pageObject.adminBuildingNameLabelText).toBe('Название');
    expect(pageObject.adminBuildingNameValueText).toBe(BUILDING_EXTENDED_STUB.name);
  });

  it('should set building person', () => {
    fixture.detectChanges();

    expect(pageObject.adminBuildingPersonLabelText).toBe('Собственник');
    expect(pageObject.adminBuildingPersonValueText).toBe(
      `${BUILDING_EXTENDED_STUB.personExtended.firstName} ${BUILDING_EXTENDED_STUB.personExtended.lastName}`
    );
  });

  it('should set building city', () => {
    fixture.detectChanges();

    expect(pageObject.adminBuildingCityLabelText).toBe('Город');
    expect(pageObject.adminBuildingCityValueText).toBe(BUILDING_EXTENDED_STUB.city);
  });

  it('should set building address', () => {
    fixture.detectChanges();

    expect(pageObject.adminBuildingAddressLabelText).toBe('Адрес');
    expect(pageObject.adminBuildingAddressValueText).toBe(BUILDING_EXTENDED_STUB.address);
  });

  it('should set building coords', () => {
    fixture.detectChanges();

    expect(pageObject.adminBuildingCoordsLabelText).toBe('Координаты');
    expect(pageObject.adminBuildingCoordsValueText).toBe(`${BUILDING_EXTENDED_STUB.lat} / ${BUILDING_EXTENDED_STUB.lng}`);
  });

  it('should set building rooms', () => {
    fixture.detectChanges();

    expect(pageObject.adminBuildingRoomsLabelText).toBe('Номера');
    expect(pageObject.adminBuildingRoomsValueText).toBe('1 - 2500');
  });

  it('should set building created', () => {
    fixture.detectChanges();

    expect(pageObject.adminBuildingCreatedLabelText).toBe('Создано');
    expect(pageObject.adminBuildingCreatedValueText).toBe(datePipe.transform(BUILDING_EXTENDED_STUB.created, 'longDate'));
  });

  it('should set building updated', () => {
    fixture.detectChanges();

    expect(pageObject.adminBuildingUpdatedLabelText).toBe('Обновлено');
    expect(pageObject.adminBuildingUpdatedValueText).toBe(datePipe.transform(BUILDING_EXTENDED_STUB.updated, 'longDate'));
  });
});
