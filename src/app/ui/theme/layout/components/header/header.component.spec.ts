import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { mock, verify } from 'ts-mockito';

import { NavigationSharedModule } from '@app/core/navigation/shared';
import { providerOf } from '@app/core/testing';

import { HelpDialogComponent } from './components/help-dialog/help-dialog.component';
import { HelpDialogModule } from './components/help-dialog/help-dialog.module';
import { HeaderComponent } from './header.component';
import { HeaderComponentPo } from './header.po';

describe('HeaderComponent', () => {
  let pageObject: HeaderComponentPo;
  let fixture: ComponentFixture<HeaderComponent>;
  let matDialogMock: MatDialog;

  beforeEach(() => {
    matDialogMock = mock(MatDialog);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatToolbarModule,
          MatButtonModule,
          MatIconModule,
          HelpDialogModule,
          MatDialogModule,
          NavigationSharedModule,
        ],
        declarations: [HeaderComponent],
        providers: [providerOf(MatDialog, matDialogMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    pageObject = new HeaderComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show header', () => {
    fixture.detectChanges();

    expect(pageObject.headerLogo).toBeTruthy();
    expect(pageObject.headerBrand).toBe('Barinb');
    expect(pageObject.headerLinkHomeText).toBe('home');
    expect(pageObject.headerLinkAdminText).toBe('settings');
    expect(pageObject.headerLinkHelpText).toBe('help_outline');
  });

  it('should open dialog after click on help button', () => {
    fixture.detectChanges();

    pageObject.triggerHeaderLinkHelpClick();

    verify(matDialogMock.open(HelpDialogComponent)).once();
  });
});
