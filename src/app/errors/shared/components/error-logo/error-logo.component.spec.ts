import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigationSharedModule } from '@app/core/navigation/shared';

import { ErrorLogoComponent } from './error-logo.component';
import { ErrorLogoComponentPo } from './error-logo.po';

describe('ErrorLogoComponent', () => {
  let pageObject: ErrorLogoComponentPo;
  let fixture: ComponentFixture<ErrorLogoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, NavigationSharedModule],
        declarations: [ErrorLogoComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLogoComponent);
    pageObject = new ErrorLogoComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show link', () => {
    fixture.detectChanges();

    expect(pageObject.errorBrandText).toBe('Barinb');
  });
});
