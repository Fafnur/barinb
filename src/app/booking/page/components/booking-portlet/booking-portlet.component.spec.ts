import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButton } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents, MockModule, MockPipes } from 'ng-mocks';

import { BookingVariantImagesPipe } from '@app/booking/shared';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { CarouselComponent } from '@app/ui/carousel';

import { BookingPortletComponent } from './booking-portlet.component';

describe('BookingPortletComponent', () => {
  let component: BookingPortletComponent;
  let fixture: ComponentFixture<BookingPortletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MockModule(NavigationSharedModule)],
      declarations: [BookingPortletComponent, MockComponents(CarouselComponent, MatButton), MockPipes(BookingVariantImagesPipe)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPortletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
