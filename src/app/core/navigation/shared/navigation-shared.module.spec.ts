import { TestBed } from '@angular/core/testing';

import { NavigationSharedModule } from './navigation-shared.module';

describe('NavigationSharedModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationSharedModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(NavigationSharedModule).toBeTruthy();
  });
});
