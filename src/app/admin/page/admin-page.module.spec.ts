import { TestBed } from '@angular/core/testing';

import { AdminPageModule } from './admin-page.module';

describe('AdminPageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPageModule).toBeTruthy();
  });
});
