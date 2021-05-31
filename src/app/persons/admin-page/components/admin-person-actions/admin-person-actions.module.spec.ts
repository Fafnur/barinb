import { TestBed } from '@angular/core/testing';

import { AdminPersonActionsModule } from './admin-person-actions.module';

describe('AdminPersonActionsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonActionsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonActionsModule).toBeTruthy();
  });
});
