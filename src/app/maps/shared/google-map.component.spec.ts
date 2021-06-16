import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GoogleMapsModule } from '@angular/google-maps';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { castMapMarkerConfigs } from '@app/booking/service';
import { BOOKING_VARIANT_STUB } from '@app/booking/state';
import { providerOf } from '@app/core/testing';
import { GoogleMapsService } from '@app/maps/services';

import { GoogleMapComponent } from './google-map.component';
import { GoogleMapComponentPo } from './google-maps-shared.po';

@Component({
  template: `<app-google-map automation-id="google-map" [markers]="markers" [options]="options"></app-google-map>`,
})
export class WrapperComponent {
  options = {
    center: {
      lat: 59.93839227045331,
      lng: 30.360033589998572,
    },
    zoom: 14,
  };
  markers = castMapMarkerConfigs([BOOKING_VARIANT_STUB]);
}

describe('GoogleMapComponent', () => {
  let pageObject: GoogleMapComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let googleMapsServiceMock: GoogleMapsService;
  let loaded$: ReplaySubject<boolean>;

  beforeEach(() => {
    googleMapsServiceMock = mock(GoogleMapsService);
    loaded$ = new ReplaySubject<boolean>(1);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MockModule(GoogleMapsModule)],
        declarations: [GoogleMapComponent, WrapperComponent],
        providers: [providerOf(GoogleMapsService, googleMapsServiceMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new GoogleMapComponentPo(fixtureWrapper);
    when(googleMapsServiceMock.load()).thenReturn(loaded$);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show markers', () => {
    fixtureWrapper.detectChanges();

    loaded$.next(true);
    fixtureWrapper.detectChanges();

    expect(pageObject.googleMapMarkers.length).toBe(1);
  });
});
