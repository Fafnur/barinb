import { TestBed } from '@angular/core/testing';

import { CarouselSlideModule } from './carousel-slide.module';

describe('CarouselModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselSlideModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(CarouselSlideModule).toBeTruthy();
  });
});
