import { TestBed } from '@angular/core/testing';

import { GridModule } from './grid.module';

describe('GridModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(GridModule).toBeTruthy();
  });
});
