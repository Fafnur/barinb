import { TestBed } from '@angular/core/testing';

import { PersonSharedModule } from './person-shared.module';

describe('PersonSharedModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonSharedModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(PersonSharedModule).toBeTruthy();
  });
});
