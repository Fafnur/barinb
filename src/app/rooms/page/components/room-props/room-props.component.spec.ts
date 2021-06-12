import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NumeralSharedModule } from '@app/core/numerals/shared';
import { ROOM_EXTENDED_STUB } from '@app/rooms/manager';

import { RoomPropsComponent } from './room-props.component';
import { RoomPropsComponentPo } from './room-props.po';

@Component({
  template: `<app-room-props [room]="room"></app-room-props>`,
})
export class WrapperComponent {
  room = ROOM_EXTENDED_STUB;
}

describe('RoomPropsComponent', () => {
  let pageObject: RoomPropsComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [NumeralSharedModule],
        declarations: [RoomPropsComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new RoomPropsComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show props', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.roomPropGuestsText).toBe('2 гостя');
    expect(pageObject.roomPropBedroomsText).toBe('1 спальня');
    expect(pageObject.roomPropBedsText).toBe('1 кровать');
    expect(pageObject.roomPropBathroomsText).toBe('1 ванная');
  });
});
