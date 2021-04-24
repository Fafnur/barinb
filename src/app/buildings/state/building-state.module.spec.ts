import { TestBed } from '@angular/core/testing';

import { BuildingStateModule } from './building-state.module';

describe('BuildingStateModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingStateModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BuildingStateModule).toBeTruthy();
  });
});
