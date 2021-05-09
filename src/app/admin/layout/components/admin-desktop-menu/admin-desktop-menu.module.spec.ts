import { TestBed } from '@angular/core/testing';

import { AdminDesktopMenuModule } from './admin-desktop-menu.module';

describe('AdminLayoutModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDesktopMenuModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminDesktopMenuModule).toBeTruthy();
  });
});
