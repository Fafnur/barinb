import { TestBed } from '@angular/core/testing';

import { AdminMobileMenuModule } from './admin-mobile-menu.module';

describe('AdminMobileMenuModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMobileMenuModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminMobileMenuModule).toBeTruthy();
  });
});
