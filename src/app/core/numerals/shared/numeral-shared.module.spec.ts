import { TestBed } from '@angular/core/testing';

import { NumeralSharedModule } from './numeral-shared.module';

describe('ContainerModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumeralSharedModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(NumeralSharedModule).toBeTruthy();
  });
});
