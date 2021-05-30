import { TestBed } from '@angular/core/testing';

import { AdminPersonsTableModule } from './admin-persons-table.module';

describe('AdminPersonsTableModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonsTableModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonsTableModule).toBeTruthy();
  });
});
