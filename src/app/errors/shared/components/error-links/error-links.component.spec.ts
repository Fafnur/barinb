import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigationSharedModule } from '@app/core/navigation/shared';

import { ErrorLinksComponent } from './error-links.component';
import { ErrorLinksComponentPo } from './error-links.po';

describe('ErrorLinksComponent', () => {
  let pageObject: ErrorLinksComponentPo;
  let fixture: ComponentFixture<ErrorLinksComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, NavigationSharedModule],
        declarations: [ErrorLinksComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLinksComponent);
    pageObject = new ErrorLinksComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show links', () => {
    fixture.detectChanges();

    expect(pageObject.errorLinkRentText).toBe('Аренда жилья');
    expect(pageObject.errorLinkAdminText).toBe('Администрирование');
    expect(pageObject.errorLinkHomeText).toBe('Главная');
  });
});
