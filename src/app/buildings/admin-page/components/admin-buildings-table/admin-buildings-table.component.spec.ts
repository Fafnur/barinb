import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MockModule } from 'ng-mocks';

import { AdminBuildingLinkModule, AdminPersonLinkModule } from '@app/admin/links/shared';
import { BUILDING_EXTENDED_STUB } from '@app/buildings/manager';

import { AdminBuildingActionsModule } from '../admin-building-actions/admin-building-actions.module';
import { AdminBuildingsTableComponent } from './admin-buildings-table.component';
import { AdminBuildingsTableComponentPo } from './admin-buildings-table.po';

@Component({
  template: `<app-admin-buildings-table [data]="data"></app-admin-buildings-table>`,
})
class WrapperComponent {
  data = [BUILDING_EXTENDED_STUB];
}

describe('AdminBuildingsTableComponent', () => {
  let pageObject: AdminBuildingsTableComponentPo<WrapperComponent>;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let datePipe: DatePipe;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MatTableModule,
          MatButtonModule,
          MatIconModule,
          MockModule(AdminBuildingActionsModule),
          MockModule(AdminBuildingLinkModule),
          MockModule(AdminPersonLinkModule),
        ],
        declarations: [AdminBuildingsTableComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminBuildingsTableComponentPo(fixtureWrapper);
    datePipe = new DatePipe('en');
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
    expect(pageObject.adminBuildingsTable).toBeTruthy();
  });

  it('should show empty template', () => {
    fixtureWrapper.detectChanges();

    pageObject.setData([]);
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingsEmptyText).toBe('Нет созданных отелей. Для того, чтобы добавить здание, нажмите - "Добавить отель".');
  });

  it('should show column id', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingIdLabelText).toBe('ID');
    expect(pageObject.adminBuildingIdValueText).toEqual([BUILDING_EXTENDED_STUB.id.toString()]);
  });

  it('should column name', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingNameLabelText).toBe('Название');
    expect(pageObject.adminBuildingNameValueText).toEqual([BUILDING_EXTENDED_STUB.name]);
  });

  it('should column city', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingCityLabelText).toBe('Город');
    expect(pageObject.adminBuildingCityValueText).toEqual([BUILDING_EXTENDED_STUB.city]);
  });

  it('should column address', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingAddressLabelText).toBe('Адрес');
    expect(pageObject.adminBuildingAddressValueText).toEqual([BUILDING_EXTENDED_STUB.address]);
  });

  it('should column created', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingCreatedLabelText).toBe('Дата создания');
    expect(pageObject.adminBuildingCreatedValueText).toEqual([datePipe.transform(BUILDING_EXTENDED_STUB.created, 'longDate')]);
  });

  it('should column updated', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingUpdatedLabelText).toBe('Дата обновления');
    expect(pageObject.adminBuildingUpdatedValueText).toEqual([datePipe.transform(BUILDING_EXTENDED_STUB.updated, 'longDate')]);
  });

  it('should column rooms', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingRoomsLabelText).toBe('Количество номеров');
    expect(pageObject.adminBuildingRoomsValueText).toEqual([BUILDING_EXTENDED_STUB.rooms.length.toString()]);
  });

  it('should column person', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingPersonLabelText).toBe('Хозяин');
    expect(pageObject.adminBuildingPersonValueText.length).toBe(1);
  });
});
