import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointState } from '@angular/cdk/layout/breakpoints-observer';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { anything, mock, verify, when } from 'ts-mockito';

import { providerOf } from '@app/core/testing';
import { RoomSharedModule } from '@app/rooms/shared';
import { CarouselModule } from '@app/ui/carousel';
import { SharedModule } from '@app/ui/shared';

import { RoomPhotosDialogComponent } from './components/room-photos-dialog/room-photos-dialog.component';
import { RoomPhotoComponent } from './room-photo.component';
import { RoomPhotoComponentPo } from './room-photo.po';

@Component({
  template: `<app-room-photo [photos]="photos"></app-room-photo>`,
})
export class WrapperComponent {
  photos = ['photo.jpg', 'photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg'];
}

describe('RoomPhotoComponent', () => {
  let pageObject: RoomPhotoComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let breakpointObserverMock: BreakpointObserver;
  let breakpointObserverMatch$: BehaviorSubject<BreakpointState>;
  let matDialogMock: MatDialog;

  beforeEach(() => {
    matDialogMock = mock(MatDialog);
    breakpointObserverMock = mock(BreakpointObserver);

    breakpointObserverMatch$ = new BehaviorSubject<BreakpointState>({
      matches: false,
      breakpoints: {},
    });
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [MatDialogModule, MatIconModule, MatButtonModule, SharedModule, RoomSharedModule, MockModule(CarouselModule)],
        declarations: [RoomPhotoComponent, WrapperComponent],
        providers: [providerOf(BreakpointObserver, breakpointObserverMock), providerOf(MatDialog, matDialogMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new RoomPhotoComponentPo(fixtureWrapper);
    when(breakpointObserverMock.observe(anything())).thenReturn(breakpointObserverMatch$);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show mobile version', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.roomPhotos).toBeNull();
    expect(pageObject.roomPhotosCarousel).toBeTruthy();
  });

  it('should show desktop version', () => {
    fixtureWrapper.detectChanges();

    breakpointObserverMatch$.next({
      matches: true,
      breakpoints: {},
    });
    fixtureWrapper.detectChanges();

    expect(pageObject.roomPhotos).toBeTruthy();
    expect(pageObject.roomPhotosCarousel).toBeNull();
  });

  it('should set first photo', () => {
    fixtureWrapper.detectChanges();

    breakpointObserverMatch$.next({
      matches: true,
      breakpoints: {},
    });
    fixtureWrapper.detectChanges();

    expect(pageObject.roomPhotoSourceSrc).toBe('photo.jpg');
  });

  it('should set other photos', () => {
    fixtureWrapper.detectChanges();

    breakpointObserverMatch$.next({
      matches: true,
      breakpoints: {},
    });
    fixtureWrapper.detectChanges();

    expect(pageObject.roomPhotoBox.length).toBe(4);
  });

  it('should set first other image styles', () => {
    fixtureWrapper.detectChanges();

    breakpointObserverMatch$.next({
      matches: true,
      breakpoints: {},
    });
    fixtureWrapper.detectChanges();

    expect(pageObject.roomPhotoPreviewFirstStyles).toEqual({ backgroundImage: 'url(photo1.jpg)' });
  });

  it('should show popup after click', () => {
    fixtureWrapper.detectChanges();

    breakpointObserverMatch$.next({
      matches: true,
      breakpoints: {},
    });
    fixtureWrapper.detectChanges();
    pageObject.triggerRoomPhotoShowClick();

    verify(matDialogMock.open(RoomPhotosDialogComponent)).once();
  });
});
