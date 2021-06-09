import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { ErrorsSharedModule } from '@app/errors/shared';

import { NotFoundPageComponent } from './not-found-page.component';
import { NotFoundPageComponentPo } from './not-found-page.po';

describe('BookingPageComponent', () => {
  let pageObject: NotFoundPageComponentPo;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, MockModule(ErrorsSharedModule)],
        declarations: [NotFoundPageComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPageComponent);
    pageObject = new NotFoundPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show error page', () => {
    fixture.detectChanges();

    expect(pageObject.errorLogo).toBeTruthy();
    expect(pageObject.errorStatusText).toBe('404');
    expect(pageObject.errorTitleText).toBe('Такой страницы нет');
    expect(pageObject.errorHintText).toBe('Возможно вы искали страницы');
    expect(pageObject.errorLinks).toBeTruthy();
    expect(pageObject.errorApplication).toBeTruthy();
  });
});
