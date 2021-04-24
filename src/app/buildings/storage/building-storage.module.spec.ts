import { TestBed } from '@angular/core/testing';

import { BuildingStorageModule } from './building-storage.module';

describe('BuildingStorageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingStorageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BuildingStorageModule).toBeTruthy();
  });
});
