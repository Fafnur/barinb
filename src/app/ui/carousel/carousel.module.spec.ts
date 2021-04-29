import { TestBed } from '@angular/core/testing';

import { CarouselModule } from './carousel.module';

describe('CarouselModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(CarouselModule).toBeTruthy();
  });
});
