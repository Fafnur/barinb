import { TestBed } from '@angular/core/testing';

import { PersonStateModule } from './person-state.module';

describe('BuildingStateModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonStateModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(PersonStateModule).toBeTruthy();
  });
});
