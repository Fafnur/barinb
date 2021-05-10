import { TestBed } from '@angular/core/testing';

import { AdminPageRoutingModule } from './admin-page-routing.module';

describe('AdminPageRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPageRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPageRoutingModule).toBeTruthy();
  });
});
