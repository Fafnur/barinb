import { TestBed } from '@angular/core/testing';

import { AdminMenuModule } from './admin-menu.module';

describe('AdminPageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMenuModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminMenuModule).toBeTruthy();
  });
});
