import { TestBed } from '@angular/core/testing';

import { CarouselNavsModule } from './carousel-navs.module';

describe('CarouselNavsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselNavsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(CarouselNavsModule).toBeTruthy();
  });
});
