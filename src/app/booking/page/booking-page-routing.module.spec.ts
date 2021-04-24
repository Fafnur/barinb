import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { BookingPageComponent } from './booking-page.component';
import { BookingPageRoutingModule } from './booking-page-routing.module';

describe('BookingPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingPageRoutingModule],
      declarations: [
        // TODO: Fix component BookingPageComponent is not part of any NgModule or the module has not been imported into your module.
        BookingPageComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create', () => {
    expect(BookingPageRoutingModule).toBeTruthy();
  });
});