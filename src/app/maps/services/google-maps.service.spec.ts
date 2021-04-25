import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GoogleMapsService } from './google-maps.service';

describe('GoogleMapsService', () => {
  let service: GoogleMapsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GoogleMapsService],
    }).compileComponents();

    service = TestBed.inject(GoogleMapsService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
