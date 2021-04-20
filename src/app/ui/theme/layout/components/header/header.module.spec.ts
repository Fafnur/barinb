import { TestBed } from '@angular/core/testing';

import { HeaderModule } from './header.module';

describe('HeaderModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(HeaderModule).toBeTruthy();
  });
});
