import { TestBed } from '@angular/core/testing';

import { FormsSharedModule } from './forms-shared.module';

describe('ContainerModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsSharedModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(FormsSharedModule).toBeTruthy();
  });
});
