import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { ContainerComponent } from '@app/ui/container';

import { BookingPageComponent } from './booking-page.component';
import { BookingPageRoutingModule } from './booking-page-routing.module';

describe('BookingPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingPageRoutingModule],
      declarations: [
        // TODO: Fix jest imports
        BookingPageComponent,
        MockComponents(ContainerComponent),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BookingPageRoutingModule).toBeTruthy();
  });
});
