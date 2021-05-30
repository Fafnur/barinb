import { TestBed } from '@angular/core/testing';

import { AdminPersonsListModule } from './admin-persons-list.module';

describe('AdminPersonsListModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonsListModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonsListModule).toBeTruthy();
  });
});
