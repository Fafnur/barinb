import { DecimalPipe } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { AdminBuildingLinkModule } from '@app/admin/links/shared';
import { AdminViewSharedModule } from '@app/admin/view/shared';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { PersonSharedModule } from '@app/persons/shared';
import { ROOM_EXTENDED_STUB } from '@app/rooms/manager';
import { RoomSharedModule } from '@app/rooms/shared';

import { AdminRoomViewDialogComponent } from './admin-room-view-dialog.component';
import { AdminRoomViewDialogComponentPo } from './admin-room-view-dialog.po';

describe('AdminRoomViewDialogComponent', () => {
  let pageObject: AdminRoomViewDialogComponentPo;
  let fixture: ComponentFixture<AdminRoomViewDialogComponent>;
  let decimalPipe: DecimalPipe;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatDialogModule,
          MatButtonModule,
          AdminViewSharedModule,
          RoomSharedModule,
          PersonSharedModule,
          NavigationSharedModule,
          MockModule(AdminBuildingLinkModule),
        ],
        declarations: [AdminRoomViewDialogComponent],
        providers: [
          {
            provide: MAT_DIALOG_DATA,
            useValue: ROOM_EXTENDED_STUB,
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomViewDialogComponent);
    pageObject = new AdminRoomViewDialogComponentPo(fixture);
    decimalPipe = new DecimalPipe('en');
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should set room name', () => {
    fixture.detectChanges();

    expect(pageObject.adminRoomPersonLabelText).toBe('Собственник');
    expect(pageObject.adminRoomPersonValueText).toBe(
      `${ROOM_EXTENDED_STUB.buildingExtended.personExtended.firstName} ${ROOM_EXTENDED_STUB.buildingExtended.personExtended.lastName}`
    );
  });

  it('should set city', () => {
    fixture.detectChanges();

    expect(pageObject.adminRoomCityLabelText).toBe('Город');
    expect(pageObject.adminRoomCityValueText).toBe(ROOM_EXTENDED_STUB.buildingExtended.city);
  });

  it('should set room address', () => {
    fixture.detectChanges();

    expect(pageObject.adminRoomAddressLabelText).toBe('Адрес');
    expect(pageObject.adminRoomAddressValueText).toBe(ROOM_EXTENDED_STUB.buildingExtended.address);
  });

  it('should set room price', () => {
    fixture.detectChanges();

    expect(pageObject.adminRoomPriceLabelText).toBe('Цена');
    expect(pageObject.adminRoomPriceValueText).toBe(decimalPipe.transform(ROOM_EXTENDED_STUB.price, '1.0-0'));
  });

  it('should set room guests', () => {
    fixture.detectChanges();

    expect(pageObject.adminRoomGuestsLabelText).toBe('Гостей');
    expect(pageObject.adminRoomGuestsValueText).toBe(ROOM_EXTENDED_STUB.guests.toString());
  });

  it('should set room bedrooms', () => {
    fixture.detectChanges();

    expect(pageObject.adminRoomBedroomsLabelText).toBe('Количество спален');
    expect(pageObject.adminRoomBedroomsValueText).toBe(ROOM_EXTENDED_STUB.bedrooms.toString());
  });

  it('should set room beds', () => {
    fixture.detectChanges();

    expect(pageObject.adminRoomBedsLabelText).toBe('Количество кроватей');
    expect(pageObject.adminRoomBedsValueText).toBe(ROOM_EXTENDED_STUB.beds.toString());
  });

  it('should set room bathrooms', () => {
    fixture.detectChanges();

    expect(pageObject.adminRoomBathroomsLabelText).toBe('Количество ванных');
    expect(pageObject.adminRoomBathroomsValueText).toBe(ROOM_EXTENDED_STUB.bathrooms.toString());
  });

  it('should set room description', () => {
    fixture.detectChanges();

    expect(pageObject.adminRoomDescriptionLabelText).toBe('Описание');
    expect(pageObject.adminRoomDescriptionValueText).toBe(ROOM_EXTENDED_STUB.description);
  });

  it('should set room amenities', () => {
    fixture.detectChanges();

    expect(pageObject.adminRoomAmenitiesLabelText).toBe('Особенности');
    expect(pageObject.adminRoomAmenitiesValue.length).toBe(ROOM_EXTENDED_STUB.amenities.length);
  });
});
