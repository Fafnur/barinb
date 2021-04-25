import { TestBed } from '@angular/core/testing';

import { GoogleMapsSharedModule } from './google-maps-shared.module';

describe('GoogleMapsSharedModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleMapsSharedModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(GoogleMapsSharedModule).toBeTruthy();
  });
});
