import { TestBed } from '@angular/core/testing';

import { AdminPersonLinkModule } from './admin-person-link.module';

describe('AdminPersonLinkModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonLinkModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonLinkModule).toBeTruthy();
  });
});
