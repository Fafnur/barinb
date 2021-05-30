import { TestBed } from '@angular/core/testing';

import { AdminPersonAvatarModule } from './admin-person-avatar.module';

describe('AdminPersonAvatarModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonAvatarModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonAvatarModule).toBeTruthy();
  });
});
