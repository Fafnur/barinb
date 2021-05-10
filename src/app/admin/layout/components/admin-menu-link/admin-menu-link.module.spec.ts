import { TestBed } from '@angular/core/testing';

import { AdminMenuLinkModule } from './admin-menu-link.module';

describe('AdminMenuLinkModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMenuLinkModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminMenuLinkModule).toBeTruthy();
  });
});
