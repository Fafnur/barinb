import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MainModule } from './components/main/main.module';
import { LayoutComponent } from './layout.component';
import { LayoutComponentPo } from './layout.po';

describe('LayoutComponent', () => {
  let pageObject: LayoutComponentPo;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule, MockModule(HeaderModule), MockModule(MainModule), MockModule(FooterModule)],
        declarations: [LayoutComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    pageObject = new LayoutComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show layout', () => {
    fixture.detectChanges();

    expect(pageObject.layoutHeader).toBeTruthy();
    expect(pageObject.layoutMain).toBeTruthy();
    expect(pageObject.layoutFooter).toBeTruthy();
  });
});
