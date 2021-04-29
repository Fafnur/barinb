import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MockComponents } from 'ng-mocks';

import { CarouselNavsComponent } from './carousel-navs.component';

describe('CarouselNavsComponent', () => {
  let component: CarouselNavsComponent;
  let fixture: ComponentFixture<CarouselNavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselNavsComponent, MockComponents(MatIcon, MatButton)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
