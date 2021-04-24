import { TestBed } from '@angular/core/testing';

import { PersonStorageModule } from './person-storage.module';

describe('PersonStorageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonStorageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(PersonStorageModule).toBeTruthy();
  });
});
