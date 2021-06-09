import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { ContainerModule } from '@app/ui/container';

import { ErrorApplicationComponent } from './error-application.component';
import { ErrorApplicationComponentPo } from './error-application.po';

describe('ErrorApplicationComponent', () => {
  let pageObject: ErrorApplicationComponentPo;
  let fixture: ComponentFixture<ErrorApplicationComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MockModule(ContainerModule)],
        declarations: [ErrorApplicationComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorApplicationComponent);
    pageObject = new ErrorApplicationComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show application tpl', () => {
    fixture.detectChanges();

    expect(pageObject.errorApplicationImageSrc).toBe('/assets/images/errors/app.png');
    expect(pageObject.errorApplicationTitleText).toBe('Скачайте приложение Barinb');
    expect(pageObject.errorApplicationHintText).toBe('Быстрый доступ к лучшей недвижимости');
    expect(pageObject.errorApplicationQrcodeSrc).toBe('/assets/images/errors/code.png');
    expect(pageObject.errorApplicationAppleText).toBe('Подробнее в App Store');
    expect(pageObject.errorApplicationGoogleText).toBe('Подробнее в Google Play');
    expect(pageObject.errorApplicationDownloadText).toBe('Скачать');
  });
});
