import { TestBed } from '@angular/core/testing';

import { NotFoundPageModule } from './not-found-page.module';

describe('NotFoundPageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundPageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(NotFoundPageModule).toBeTruthy();
  });
});
