import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MockModule } from 'ng-mocks';

import { IconsModule } from '@app/ui/icons';

import { FooterComponent } from './footer.component';
import { FooterComponentPo } from './footer.po';

describe('FooterComponent', () => {
  let pageObject: FooterComponentPo;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [MatButtonModule, MockModule(IconsModule)],
        declarations: [FooterComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    pageObject = new FooterComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show footer', () => {
    fixture.detectChanges();

    expect(pageObject.footerCopyrightText).toBe('© 2021 Barinb. Все права защищены.');
    expect(pageObject.footerLinkFacebookHref).toBe('//facebook.com');
    expect(pageObject.footerLinkTwitterHref).toBe('//twitter.com');
    expect(pageObject.footerLinkYoutubeHref).toBe('//youtube.com');
    expect(pageObject.footerLinkTelegramHref).toBe('//telegram.org');
  });
});
