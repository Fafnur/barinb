import { TestBed } from '@angular/core/testing';

import { AdminPersonCreateDialogModule } from './admin-person-create-dialog.module';

describe('AdminPersonCreateDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonCreateDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonCreateDialogModule).toBeTruthy();
  });
});
