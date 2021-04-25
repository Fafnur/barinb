import { TestBed } from '@angular/core/testing';

import { GoogleMapsServiceModule } from './google-maps-service.module';

describe('GoogleMapsServiceModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleMapsServiceModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(GoogleMapsServiceModule).toBeTruthy();
  });
});
