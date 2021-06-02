import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointState } from '@angular/cdk/layout/breakpoints-observer';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { providerOf } from '@app/core/testing';
import { ContainerModule } from '@app/ui/container';
import { GridModule } from '@app/ui/grid';

import { BookingPageComponent } from './booking-page.component';
import { BookingPageComponentPo } from './booking-page.po';
import { BookingBoxModule } from './components/booking-box/booking-box.module';
import { BookingCardModule } from './components/booking-card/booking-card.module';
import { BookingListModule } from './components/booking-list/booking-list.module';
import { BookingMapModule } from './components/booking-map/booking-map.module';

describe('BookingPageComponent', () => {
  let pageObject: BookingPageComponentPo;
  let fixture: ComponentFixture<BookingPageComponent>;
  let breakpointObserverMock: BreakpointObserver;
  let breakpointObserverMatch$: BehaviorSubject<BreakpointState>;

  beforeEach(() => {
    breakpointObserverMock = mock(BreakpointObserver);

    breakpointObserverMatch$ = new BehaviorSubject<BreakpointState>({
      matches: false,
      breakpoints: {},
    });
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MatButtonModule,
          MatIconModule,
          MockModule(BookingMapModule),
          MockModule(BookingListModule),
          MockModule(BookingCardModule),
          MockModule(BookingBoxModule),
          MockModule(GridModule),
          MockModule(ContainerModule),
        ],
        declarations: [BookingPageComponent],
        providers: [providerOf(BreakpointObserver, breakpointObserverMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPageComponent);
    pageObject = new BookingPageComponentPo(fixture);
    when(breakpointObserverMock.observe(anything())).thenReturn(breakpointObserverMatch$);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('the toggle button text should be - view_list', () => {
    fixture.detectChanges();

    expect(pageObject.bookingViewToggleText).toBe('view_list');
    expect(pageObject.isMapShow).toBeTruthy();
    expect(pageObject.bookingMapMobile).toBeTruthy();
  });

  it('after clicking, the toggle button text should be - map', () => {
    fixture.detectChanges();

    pageObject.triggerBookingViewToggle();
    fixture.detectChanges();

    expect(pageObject.bookingViewToggleText).toBe('map');
    expect(pageObject.isMapShow).toBeFalsy();
    expect(pageObject.bookingListMobile).toBeTruthy();
  });

  it('the desktop version should show map and list', () => {
    fixture.detectChanges();

    breakpointObserverMatch$.next({
      matches: true,
      breakpoints: {},
    });
    fixture.detectChanges();

    expect(pageObject.bookingListDesktop).toBeTruthy();
    expect(pageObject.bookingMapDesktop).toBeTruthy();
    expect(pageObject.bookingMapMobile).toBeNull();
    expect(pageObject.bookingListMobile).toBeNull();
  });
});
