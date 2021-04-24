import { TestBed } from '@angular/core/testing';

import { PersonServiceModule } from './person-service.module';

describe('PersonServiceModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonServiceModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(PersonServiceModule).toBeTruthy();
  });
});
