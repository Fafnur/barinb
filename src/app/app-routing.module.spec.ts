import { TestBed } from '@angular/core/testing';

import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AppRoutingModule).toBeTruthy();
  });
});
