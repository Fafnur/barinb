import { TestBed } from '@angular/core/testing';

import { PlatformService } from './platform.service';

describe('PlatformService', () => {
  let service: PlatformService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [PlatformService],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(PlatformService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
