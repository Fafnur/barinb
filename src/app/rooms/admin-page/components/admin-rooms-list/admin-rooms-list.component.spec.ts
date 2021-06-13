import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { ROOMS_EXTENDED_STUB } from '@app/rooms/manager';

import { AdminRoomCardModule } from '../admin-room-card/admin-room-card.module';
import { AdminRoomsListComponent } from './admin-rooms-list.component';
import { AdminRoomsListComponentPo } from './admin-rooms-list.po';

@Component({
  template: `<app-admin-rooms-list [data]="data"></app-admin-rooms-list>`,
})
class WrapperComponent {
  data = ROOMS_EXTENDED_STUB;
}

describe('AdminRoomsListComponent', () => {
  let pageObject: AdminRoomsListComponentPo<WrapperComponent>;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MockModule(AdminRoomCardModule)],
        declarations: [AdminRoomsListComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminRoomsListComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminRoomCards.length).toBe(ROOMS_EXTENDED_STUB.length);
  });
});
