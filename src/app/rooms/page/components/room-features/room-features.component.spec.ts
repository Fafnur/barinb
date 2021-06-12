import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { ROOM_EXTENDED_STUB } from '@app/rooms/manager';

import { RoomFeaturesComponent } from './room-features.component';
import { RoomFeaturesComponentPo } from './room-features.po';

@Component({
  template: `<app-room-features [room]="room"></app-room-features>`,
})
export class WrapperComponent {
  room = ROOM_EXTENDED_STUB;
}

describe('RoomFeaturesComponent', () => {
  let pageObject: RoomFeaturesComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [MatIconModule],
        declarations: [RoomFeaturesComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new RoomFeaturesComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show features', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.roomFeatureTitleIconText).toBe('home');
    expect(pageObject.roomFeatureTitleLabelText).toBe('Жилье целиком');
    expect(pageObject.roomFeatureTitleValueText).toBe('Квартира полностью в вашем распоряжении.');

    expect(pageObject.roomFeatureCleaningIconText).toBe('cleaning_services');
    expect(pageObject.roomFeatureCleaningLabelText).toBe('Расширенная уборка');
    expect(pageObject.roomFeatureCleaningValueText).toBe('Хозяин следует расширенному протоколу уборки.');

    expect(pageObject.roomFeaturePersonIconText).toBe('emoji_events');
    expect(pageObject.roomFeaturePersonLabelText).toBe(`${ROOM_EXTENDED_STUB.buildingExtended.personExtended.firstName} — суперхозяин.`);
    expect(pageObject.roomFeaturePersonValueText).toBe(
      'Суперхозяева — опытные хозяева с отличными отзывами, которые делают всё для комфорта гостей.'
    );

    expect(pageObject.roomFeatureRulesIconText).toBe('list_alt');
    expect(pageObject.roomFeatureRulesLabelText).toBe('Правила дома');
    expect(pageObject.roomFeatureRulesValueText).toBe('В жилье нельзя останавливаться с животными, проводить вечеринки или курить.');

    expect(pageObject.roomFeatureCancelIconText).toBe('date_range');
    expect(pageObject.roomFeatureCancelLabelText).toBe('Бесплатная отмена');
  });
});
