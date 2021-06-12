import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointState } from '@angular/cdk/layout/breakpoints-observer';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { providerOf } from '@app/core/testing';
import { RoomExtended, RoomManager, ROOMS_EXTENDED_STUB } from '@app/rooms/manager';

import { AdminRoomsActionsModule } from './components/admin-rooms-actions/admin-rooms-actions.module';
import { AdminRoomsListModule } from './components/admin-rooms-list/admin-rooms-list.module';
import { AdminRoomsTableModule } from './components/admin-rooms-table/admin-rooms-table.module';
import { RoomAdminPageComponent } from './room-admin-page.component';
import { RoomAdminPageComponentPo } from './room-admin-page.po';

describe('RoomAdminPageComponent', () => {
  let pageObject: RoomAdminPageComponentPo;
  let fixture: ComponentFixture<RoomAdminPageComponent>;
  let roomManagerMock: RoomManager;
  let roomsExtended$: ReplaySubject<RoomExtended[]>;
  let breakpointObserverMock: BreakpointObserver;
  let breakpointObserverMatch$: BehaviorSubject<BreakpointState>;

  beforeEach(() => {
    breakpointObserverMock = mock(BreakpointObserver);
    breakpointObserverMatch$ = new BehaviorSubject<BreakpointState>({
      matches: false,
      breakpoints: {},
    });

    roomManagerMock = mock(RoomManager);
    roomsExtended$ = new ReplaySubject<RoomExtended[]>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MockModule(AdminRoomsActionsModule),
          MockModule(AdminRoomsListModule),
          MockModule(AdminRoomsTableModule),
        ],
        declarations: [RoomAdminPageComponent],
        providers: [providerOf(BreakpointObserver, breakpointObserverMock), providerOf(RoomManager, roomManagerMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAdminPageComponent);
    pageObject = new RoomAdminPageComponentPo(fixture);
    when(breakpointObserverMock.observe(anything())).thenReturn(breakpointObserverMatch$);
    when(roomManagerMock.roomsExtended$).thenReturn(roomsExtended$);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show mobile version', () => {
    fixture.detectChanges();

    roomsExtended$.next(ROOMS_EXTENDED_STUB);
    fixture.detectChanges();

    expect(pageObject.adminRoomsTable).toBeNull();
    expect(pageObject.adminRoomsActions).toBeTruthy();
    expect(pageObject.adminRoomsList).toBeTruthy();
    expect(pageObject.isDesktopScreen).toBeFalsy();
  });

  it('should show desktop version', () => {
    fixture.detectChanges();

    roomsExtended$.next(ROOMS_EXTENDED_STUB);
    breakpointObserverMatch$.next({
      matches: true,
      breakpoints: {},
    });
    fixture.detectChanges();

    expect(pageObject.adminRoomsTable).toBeTruthy();
    expect(pageObject.adminRoomsActions).toBeTruthy();
    expect(pageObject.adminRoomsList).toBeNull();
    expect(pageObject.isDesktopScreen).toBeTruthy();
  });
});
