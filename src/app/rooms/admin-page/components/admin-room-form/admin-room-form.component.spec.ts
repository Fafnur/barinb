import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@app/core/forms/shared';
import { ROOM_EXTENDED_STUB } from '@app/rooms/manager';
import { GridModule } from '@app/ui/grid';

import { AdminRoomFormComponent } from './admin-room-form.component';
import { RoomAdminFormComponentPo } from './admin-room-form.po';
import { AdminRoomAmenitiesModule } from './components/admin-room-amenities/admin-room-amenities.module';
import { AdminRoomBathroomsModule } from './components/admin-room-bathrooms/admin-room-bathrooms.module';
import { AdminRoomBedroomsModule } from './components/admin-room-bedrooms/admin-room-bedrooms.module';
import { AdminRoomBedsModule } from './components/admin-room-beds/admin-room-beds.module';
import { AdminRoomBuildingModule } from './components/admin-room-building/admin-room-building.module';
import { AdminRoomDescriptionModule } from './components/admin-room-description/admin-room-description.module';
import { AdminRoomGuestsModule } from './components/admin-room-guests/admin-room-guests.module';
import { AdminRoomPersonModule } from './components/admin-room-person/admin-room-person.module';
import { AdminRoomPhotosModule } from './components/admin-room-photos/admin-room-photos.module';
import { AdminRoomPriceModule } from './components/admin-room-price/admin-room-price.module';

@Component({
  template: `<app-admin-room-form [form]="form"></app-admin-room-form>`,
})
export class WrapperComponent {
  form = new FormGroup({});
  room = ROOM_EXTENDED_STUB;
}

describe('AdminRoomFormComponent', () => {
  let pageObject: RoomAdminFormComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          ReactiveFormsModule,
          MatButtonModule,
          FormsSharedModule,
          GridModule,
          MockModule(AdminRoomAmenitiesModule),
          MockModule(AdminRoomBathroomsModule),
          MockModule(AdminRoomBedroomsModule),
          MockModule(AdminRoomBedsModule),
          MockModule(AdminRoomBuildingModule),
          MockModule(AdminRoomDescriptionModule),
          MockModule(AdminRoomGuestsModule),
          MockModule(AdminRoomPhotosModule),
          MockModule(AdminRoomPriceModule),
          MockModule(AdminRoomPersonModule),
        ],
        declarations: [AdminRoomFormComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new RoomAdminFormComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show forms fields', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomPerson).toBeTruthy();
    expect(pageObject.adminRoomBuilding).toBeTruthy();
    expect(pageObject.adminRoomPrice).toBeTruthy();
    expect(pageObject.adminRoomGuests).toBeTruthy();
    expect(pageObject.adminRoomBedrooms).toBeTruthy();
    expect(pageObject.adminRoomBedrooms).toBeTruthy();
    expect(pageObject.adminRoomBeds).toBeTruthy();
    expect(pageObject.adminRoomBathrooms).toBeTruthy();
    expect(pageObject.adminRoomAmenities).toBeTruthy();
    expect(pageObject.adminRoomPhotos).toBeTruthy();
    expect(pageObject.adminRoomDescription).toBeTruthy();
  });
});
