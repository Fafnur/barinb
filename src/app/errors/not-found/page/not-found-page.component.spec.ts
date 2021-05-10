import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents } from 'ng-mocks';

import {
  ErrorApplicationComponent,
  ErrorHintComponent,
  ErrorLinksComponent,
  ErrorLogoComponent,
  ErrorStatusComponent,
  ErrorTitleComponent,
} from '@app/errors/shared';

import { NotFoundPageComponent } from './not-found-page.component';

describe('BookingPageComponent', () => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        NotFoundPageComponent,
        MockComponents(
          ErrorLogoComponent,
          ErrorStatusComponent,
          ErrorTitleComponent,
          ErrorHintComponent,
          ErrorLinksComponent,
          ErrorApplicationComponent
        ),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
