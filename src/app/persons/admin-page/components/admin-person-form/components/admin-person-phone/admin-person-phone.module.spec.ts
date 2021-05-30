import { TestBed } from '@angular/core/testing';

import { AdminPersonPhoneModule } from './admin-person-phone.module';

describe('AdminPersonPhoneModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonPhoneModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonPhoneModule).toBeTruthy();
  });
});
