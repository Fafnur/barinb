import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './google-map.component.spec';

enum GoogleMapAutomation {
  GoogleMap = 'google-map',
  GoogleMapMarker = 'google-map-marker',
  GoogleMapInfoWindow = 'google-map-info-window',
}

export class GoogleMapComponentPo extends PageObject<WrapperComponent> {
  get googleMapMarkers(): DebugElement[] {
    return this.getAllByAutomationId(GoogleMapAutomation.GoogleMapMarker);
  }

  get googleMapInfoWindow(): DebugElement | null {
    return this.getByAutomationId(GoogleMapAutomation.GoogleMapInfoWindow);
  }

  get mapInfoWindowClosed(): any {
    return this.getByAutomationId(GoogleMapAutomation.GoogleMap)?.componentInstance?.mapInfoWindowClosed ?? null;
  }

  triggerGoogleMapClick(): void {
    this.triggerEventHandler(this.googleMapMarkers[0], 'click');
  }

  triggerGoogleMapInfoWindowClick(): void {
    this.triggerEventHandler(GoogleMapAutomation.GoogleMapInfoWindow, 'click');
  }
}
