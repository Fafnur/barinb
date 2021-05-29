import { TestBed } from '@angular/core/testing';

import { AdminViewGroupModule } from './admin-view-group.module';

describe('AdminViewGroupModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewGroupModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminViewGroupModule).toBeTruthy();
  });
});
