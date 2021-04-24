import { TestBed } from '@angular/core/testing';

import { BuildingServiceModule } from './building-service.module';

describe('BuildingServiceModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingServiceModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BuildingServiceModule).toBeTruthy();
  });
});
