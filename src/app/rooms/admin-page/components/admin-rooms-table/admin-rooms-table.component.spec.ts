import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MockModule } from 'ng-mocks';

import { AdminBuildingLinkModule, AdminPersonLinkModule } from '@app/admin/links/shared';
import { ROOM_EXTENDED_STUB } from '@app/rooms/manager';
import { CarouselModule } from '@app/ui/carousel';

import { AdminRoomActionsModule } from '../admin-room-actions/admin-room-actions.module';
import { AdminRoomsTableComponent } from './admin-rooms-table.component';
import { AdminRoomsTableComponentPo } from './admin-rooms-table.po';

@Component({
  template: `<app-admin-rooms-table [data]="data"></app-admin-rooms-table>`,
})
class WrapperComponent {
  data = [ROOM_EXTENDED_STUB];
}

describe('AdminRoomsTableComponent', () => {
  let pageObject: AdminRoomsTableComponentPo<WrapperComponent>;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let datePipe: DatePipe;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MatTableModule,
          MatButtonModule,
          MatIconModule,
          MockModule(AdminBuildingLinkModule),
          MockModule(AdminPersonLinkModule),
          MockModule(CarouselModule),
          MockModule(AdminRoomActionsModule),
        ],
        declarations: [AdminRoomsTableComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminRoomsTableComponentPo(fixtureWrapper);
    datePipe = new DatePipe('en');
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
    expect(pageObject.adminRoomsTable).toBeTruthy();
  });

  it('should show empty template', () => {
    fixtureWrapper.detectChanges();

    pageObject.setData([]);
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomsEmptyText).toBe('Нет созданных номеров. Для того, чтобы добавить номер, нажмите - "Добавить номер".');
  });

  it('should show column id', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomIdLabelText).toBe('ID');
    expect(pageObject.adminRoomIdValueText).toEqual([ROOM_EXTENDED_STUB.id.toString()]);
  });

  it('should column person', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomPersonLabelText).toBe('Хозяин');
    expect(pageObject.adminRoomPersonValueText).toEqual(['']);
  });

  it('should column building', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomBuildingLabelText).toBe('Здание');
    expect(pageObject.adminRoomBuildingValueText).toEqual(['']);
  });

  it('should column price', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomPriceLabelText).toBe('Цена');
    expect(pageObject.adminRoomPriceValueText).toEqual([ROOM_EXTENDED_STUB.price.toString()]);
  });

  // it('should column description', () => {
  //   fixtureWrapper.detectChanges();
  //
  //   expect(pageObject.adminRoomDescriptionLabelText).toBe('Описание');
  //   expect(pageObject.adminRoomDescriptionValueText).toEqual([ROOM_EXTENDED_STUB.description]);
  // });

  it('should column created', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomCreatedLabelText).toBe('Дата создания');
    expect(pageObject.adminRoomCreatedValueText).toEqual([datePipe.transform(ROOM_EXTENDED_STUB.created, 'longDate')]);
  });

  it('should column updated', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomUpdatedLabelText).toBe('Дата обновления');
    expect(pageObject.adminRoomUpdatedValueText).toEqual([datePipe.transform(ROOM_EXTENDED_STUB.updated, 'longDate')]);
  });

  it('should column actions', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomActionsLabelText).toBe('Действия');
    expect(pageObject.adminRoomActionsValueText.length).toEqual(1);
  });
});
