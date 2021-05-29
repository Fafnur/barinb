import { TestBed } from '@angular/core/testing';

import { BuildingManagerModule } from './building-manager.module';

describe('BuildingManagerModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingManagerModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BuildingManagerModule).toBeTruthy();
  });
});
