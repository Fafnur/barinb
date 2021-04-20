import { TestBed } from '@angular/core/testing';

import { FooterModule } from './footer.module';

describe('FooterModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(FooterModule).toBeTruthy();
  });
});
