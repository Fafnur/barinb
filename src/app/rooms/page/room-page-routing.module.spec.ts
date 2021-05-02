import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { RoomPageComponent } from './room-page.component';
import { RoomPageRoutingModule } from './room-page-routing.module';

describe('RoomPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomPageRoutingModule],
      declarations: [
        // TODO: Fix component BookingPageComponent is not part of any NgModule or the module has not been imported into your module.
        RoomPageComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomPageRoutingModule).toBeTruthy();
  });
});
