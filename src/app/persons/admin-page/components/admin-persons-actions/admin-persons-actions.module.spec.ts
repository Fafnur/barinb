import { TestBed } from '@angular/core/testing';

import { AdminPersonsActionsModule } from './admin-persons-actions.module';

describe('AdminPersonsActionsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonsActionsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonsActionsModule).toBeTruthy();
  });
});
