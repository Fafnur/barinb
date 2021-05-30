import { TestBed } from '@angular/core/testing';

import { AdminPersonFirstnameModule } from './admin-person-firstname.module';

describe('AdminPersonFirstnameModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonFirstnameModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonFirstnameModule).toBeTruthy();
  });
});
