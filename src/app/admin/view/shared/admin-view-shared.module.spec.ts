import { TestBed } from '@angular/core/testing';

import { AdminViewSharedModule } from './admin-view-shared.module';

describe('AdminViewSharedModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewSharedModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminViewSharedModule).toBeTruthy();
  });
});
