import { TestBed } from '@angular/core/testing';

import { PersonAdminPageModule } from './person-admin-page.module';

describe('PersonAdminPageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonAdminPageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(PersonAdminPageModule).toBeTruthy();
  });
});
