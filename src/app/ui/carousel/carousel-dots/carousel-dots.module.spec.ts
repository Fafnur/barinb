import { TestBed } from '@angular/core/testing';

import { CarouselDotsModule } from './carousel-dots.module';

describe('CarouselDotsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselDotsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(CarouselDotsModule).toBeTruthy();
  });
});
