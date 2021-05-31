import { TestBed } from '@angular/core/testing';

import { RowModule } from './row.module';

describe('RowModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RowModule).toBeTruthy();
  });
});
