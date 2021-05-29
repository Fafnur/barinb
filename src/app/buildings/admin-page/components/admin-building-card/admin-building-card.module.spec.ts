import { TestBed } from '@angular/core/testing';

import { AdminBuildingCardModule } from './admin-building-card.module';

describe('AdminBuildingCardModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingCardModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingCardModule).toBeTruthy();
  });
});
