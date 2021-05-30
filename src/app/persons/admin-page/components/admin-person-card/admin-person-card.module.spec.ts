import { TestBed } from '@angular/core/testing';

import { AdminPersonCardModule } from './admin-person-card.module';

describe('AdminBuildingCardModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonCardModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonCardModule).toBeTruthy();
  });
});
