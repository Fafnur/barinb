import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { CarouselComponent } from './carousel.component';
import { CarouselDotsComponent } from './carousel-dots/carousel-dots.component';
import { CarouselNavsComponent } from './carousel-navs/carousel-navs.component';
import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent, MockComponents(CarouselDotsComponent, CarouselNavsComponent, CarouselSlideComponent)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
