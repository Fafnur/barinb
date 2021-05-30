import { TestBed } from '@angular/core/testing';

import { AdminPersonLastnameModule } from './admin-person-lastname.module';

describe('AdminPersonLastnameModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonLastnameModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonLastnameModule).toBeTruthy();
  });
});
