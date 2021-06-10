import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { BuildingSharedModule } from '@app/buildings/shared';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { PERSON_EXTENDED_STUB } from '@app/persons/manager';
import { PersonSharedModule } from '@app/persons/shared';
import { RoomSharedModule } from '@app/rooms/shared';
import { CarouselModule } from '@app/ui/carousel';
import { SharedModule } from '@app/ui/shared';

import { AdminPersonActionsModule } from '../admin-person-actions/admin-person-actions.module';
import { AdminPersonCardComponent } from './admin-person-card.component';
import { AdminPersonCardComponentPo } from './admin-person-card.po';

@Component({
  template: `<app-admin-person-card automation-id="admin-person-card" [person]="person"></app-admin-person-card>`,
})
class WrapperComponent {
  person = PERSON_EXTENDED_STUB;
}

describe('AdminPersonCardComponent', () => {
  let pageObject: AdminPersonCardComponentPo<WrapperComponent>;
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
          BuildingSharedModule,
          MockModule(AdminPersonActionsModule),
          MockModule(CarouselModule),
        ],
        declarations: [AdminPersonCardComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminPersonCardComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set background image for component', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonCardAvatarStyles).toEqual({ backgroundImage: `url(${PERSON_EXTENDED_STUB.avatar})` });
  });

  it('should set avatar path', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonCardAvatarHref).toBe('/admin/persons?person=1');
  });

  it('should set card title', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonCardTitleText).toBe(`${PERSON_EXTENDED_STUB.firstName} ${PERSON_EXTENDED_STUB.lastName}`);
  });

  it('should set card subtitle', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonCardSubtitleText).toBe(PERSON_EXTENDED_STUB.phone);
  });

  it('should set card carousel', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonCardCarousel).toBeTruthy();
    expect(pageObject.adminPersonCardCarouselImages).toBe(PERSON_EXTENDED_STUB.buildingsExtended[0].roomsExtended[0].photos[0]);
  });

  it('should set card rooms', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonCardRoomsText).toBe('номеров 1');
  });

  it('should set card date', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonCardBuildingsText).toBe(`отелей ${PERSON_EXTENDED_STUB.buildings.length}`);
  });

  it('should set card actions', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonActions).toBeTruthy();
  });
});
