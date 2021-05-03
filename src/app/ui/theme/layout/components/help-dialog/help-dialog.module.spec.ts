import { TestBed } from '@angular/core/testing';

import { HelpDialogModule } from './help-dialog.module';

describe('HelpDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(HelpDialogModule).toBeTruthy();
  });
});
