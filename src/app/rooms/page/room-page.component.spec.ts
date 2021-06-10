import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { providerOf } from '@app/core/testing';
import { RoomExtended, RoomManager } from '@app/rooms/manager';
import { ContainerModule } from '@app/ui/container';
import { GridModule } from '@app/ui/grid';

import { ROOM_EXTENDED_STUB } from '../manager/room-manager.stub';
import { RoomBookingCardModule } from './components/room-booking-card/room-booking-card.module';
import { RoomDescriptionModule } from './components/room-description/room-description.module';
import { RoomDetailsModule } from './components/room-details/room-details.module';
import { RoomFeaturesModule } from './components/room-features/room-features.module';
import { RoomHeaderModule } from './components/room-header/room-header.module';
import { RoomPersonModule } from './components/room-person/room-person.module';
import { RoomPhotoModule } from './components/room-photo/room-photo.module';
import { RoomPropsModule } from './components/room-props/room-props.module';
import { RoomPageComponent } from './room-page.component';
import { RoomPageComponentPo } from './room-page.po';

describe('RoomPageComponent', () => {
  let pageObject: RoomPageComponentPo;
  let fixture: ComponentFixture<RoomPageComponent>;
  let activatedRouteMock: ActivatedRoute;
  let roomManagerMock: RoomManager;
  let roomExtended$: ReplaySubject<RoomExtended>;

  beforeEach(() => {
    activatedRouteMock = mock(ActivatedRoute);
    roomManagerMock = mock(RoomManager);

    roomExtended$ = new ReplaySubject<RoomExtended>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          ContainerModule,
          MatIconModule,
          MatButtonModule,
          GridModule,
          MockModule(RoomPropsModule),
          MockModule(RoomPhotoModule),
          MockModule(RoomHeaderModule),
          MockModule(RoomDetailsModule),
          MockModule(RoomPersonModule),
          MockModule(RoomFeaturesModule),
          MockModule(RoomDescriptionModule),
          MockModule(RoomBookingCardModule),
        ],
        declarations: [RoomPageComponent],
        providers: [providerOf(RoomManager, roomManagerMock), providerOf(ActivatedRoute, activatedRouteMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPageComponent);
    pageObject = new RoomPageComponentPo(fixture);
    when(roomManagerMock.roomExtended$(anything())).thenReturn(roomExtended$);
    when(activatedRouteMock.snapshot).thenReturn({ params: { id: ROOM_EXTENDED_STUB.id } } as any);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show room details', () => {
    fixture.detectChanges();

    roomExtended$.next(ROOM_EXTENDED_STUB);
    fixture.detectChanges();

    expect(pageObject.roomHeader).toBeTruthy();
    expect(pageObject.roomDetails).toBeTruthy();
    expect(pageObject.roomPhoto).toBeTruthy();
    expect(pageObject.roomPerson).toBeTruthy();
    expect(pageObject.roomProps).toBeTruthy();
    expect(pageObject.roomDescription).toBeTruthy();
    expect(pageObject.roomCard).toBeTruthy();
  });
});
