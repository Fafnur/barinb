import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { NavigationSharedModule } from '@app/core/navigation/shared';
import { PersonSharedModule } from '@app/persons/shared';
import { ROOM_EXTENDED_STUB } from '@app/rooms/manager';
import { RoomSharedModule } from '@app/rooms/shared';
import { CarouselModule } from '@app/ui/carousel';
import { SharedModule } from '@app/ui/shared';

import { AdminRoomActionsModule } from '../admin-room-actions/admin-room-actions.module';
import { AdminRoomCardComponent } from './admin-room-card.component';
import { AdminRoomCardComponentPo } from './admin-room-card.po';

@Component({
  template: `<app-admin-room-card automation-id="admin-room-card" [room]="room"></app-admin-room-card>`,
})
class WrapperComponent {
  room = ROOM_EXTENDED_STUB;
}

describe('AdminRoomCardComponent', () => {
  let pageObject: AdminRoomCardComponentPo<WrapperComponent>;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let datePipe: DatePipe;

  beforeEach(() => {
    datePipe = new DatePipe('en');
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatButtonModule,
          MatIconModule,
          MatCardModule,
          SharedModule,
          RoomSharedModule,
          NavigationSharedModule,
          RoomSharedModule,
          PersonSharedModule,
          MockModule(AdminRoomActionsModule),
          MockModule(CarouselModule),
        ],
        declarations: [AdminRoomCardComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminRoomCardComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set background image for component', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomCardAvatarStyles).toEqual({
      backgroundImage: `url(${ROOM_EXTENDED_STUB.buildingExtended.personExtended.avatar})`,
    });
  });

  it('should set avatar path', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomCardAvatarHref).toBe('/admin/persons?person=1');
  });

  it('should set card title', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomCardTitleText).toBe(
      `${ROOM_EXTENDED_STUB.buildingExtended.personExtended.firstName} ${ROOM_EXTENDED_STUB.buildingExtended.personExtended.lastName}`
    );
  });

  it('should set card subtitle', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomCardSubtitleText).toBe(
      `${ROOM_EXTENDED_STUB.buildingExtended.city}, ${ROOM_EXTENDED_STUB.buildingExtended.address}`
    );
  });

  it('should set card carousel', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomCardCarousel).toBeTruthy();
    expect(pageObject.adminRoomCardCarouselImages).toBe(ROOM_EXTENDED_STUB.photos[0]);
  });

  it('should set card description', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomCardDescriptionText).toBe(ROOM_EXTENDED_STUB.description);
  });

  it('should set card created', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomCardCreatedText).toBe(datePipe.transform(ROOM_EXTENDED_STUB.created, 'longDate'));
  });

  it('should set card price', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomCardPriceText).toBe(`${ROOM_EXTENDED_STUB.price} ₽`);
  });

  it('should set card actions', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomActions).toBeTruthy();
  });
});
