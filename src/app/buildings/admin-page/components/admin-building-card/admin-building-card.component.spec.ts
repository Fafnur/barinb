import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { AdminBuildingLinkModule, AdminPersonLinkModule } from '@app/admin/links/shared';
import { BUILDING_EXTENDED_STUB } from '@app/buildings/manager';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { PersonSharedModule } from '@app/persons/shared';
import { RoomSharedModule } from '@app/rooms/shared';
import { CarouselModule } from '@app/ui/carousel';
import { SharedModule } from '@app/ui/shared';

import { AdminBuildingActionsModule } from '../admin-building-actions/admin-building-actions.module';
import { AdminBuildingCardComponent } from './admin-building-card.component';
import { AdminBuildingCardComponentPo } from './admin-building-card.po';

@Component({
  template: `<app-admin-building-card automation-id="admin-building-card" [building]="building"></app-admin-building-card>`,
})
class WrapperComponent {
  building = BUILDING_EXTENDED_STUB;
}

describe('AdminBuildingCardComponent', () => {
  let pageObject: AdminBuildingCardComponentPo<WrapperComponent>;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatButtonModule,
          MatIconModule,
          MatCardModule,
          SharedModule,
          PersonSharedModule,
          NavigationSharedModule,
          RoomSharedModule,
          MockModule(AdminBuildingActionsModule),
          MockModule(AdminBuildingLinkModule),
          MockModule(AdminPersonLinkModule),
          MockModule(CarouselModule),
        ],
        declarations: [AdminBuildingCardComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminBuildingCardComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set background image for component', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingCardAvatarStyles).toEqual({ backgroundImage: `url(${BUILDING_EXTENDED_STUB.personExtended?.avatar})` });
  });

  it('should set avatar path', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingCardAvatarHref).toBe('/admin/persons?person=1');
  });

  it('should set card title', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingCardTitleText).toBe(
      `${BUILDING_EXTENDED_STUB.personExtended.firstName} ${BUILDING_EXTENDED_STUB.personExtended.lastName}`
    );
  });

  it('should set card subtitle', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingCardSubtitleText).toBe(`${BUILDING_EXTENDED_STUB.city}, ${BUILDING_EXTENDED_STUB.address}`);
  });

  it('should set card carousel', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingCardCarousel).toBeTruthy();
    expect(pageObject.adminBuildingCardCarouselImages).toBe(BUILDING_EXTENDED_STUB.roomsExtended[0].photos[0]);
  });

  it('should set card rooms', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingCardRoomsText).toBe(`номеров ${BUILDING_EXTENDED_STUB.roomsExtended.length}`);
  });

  it('should set card date', () => {
    fixtureWrapper.detectChanges();

    const dateFormatted = new DatePipe('en').transform(BUILDING_EXTENDED_STUB.created, 'longDate');
    expect(pageObject.adminBuildingCardDateText).toBe(dateFormatted);
  });

  it('should set card actions', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingActions).toBeTruthy();
  });
});
