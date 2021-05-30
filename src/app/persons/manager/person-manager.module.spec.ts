import { TestBed } from '@angular/core/testing';

import { PersonManagerModule } from './person-manager.module';

describe('PersonManagerModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonManagerModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(PersonManagerModule).toBeTruthy();
  });
});
