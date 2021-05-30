import { TestBed } from '@angular/core/testing';

import { AdminPersonMiddlenameModule } from './admin-person-middlename.module';

describe('AdminPersonMiddlenameModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonMiddlenameModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonMiddlenameModule).toBeTruthy();
  });
});
