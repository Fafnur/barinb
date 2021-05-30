import { TestBed } from '@angular/core/testing';

import { AdminPersonFormModule } from './admin-person-form.module';

describe('AdminPersonFormModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonFormModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonFormModule).toBeTruthy();
  });
});
