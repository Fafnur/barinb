import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointState } from '@angular/cdk/layout/breakpoints-observer';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { anything, mock, when } from 'ts-mockito';

import { providerOf } from '@app/core/testing';
import { ContainerModule } from '@app/ui/container';
import { GridModule } from '@app/ui/grid';

import { AdminLayoutComponent } from './admin-layout.component';
import { AdminLayoutComponentPo } from './admin-layout.po';
import { AdminDesktopMenuModule } from './components/admin-desktop-menu/admin-desktop-menu.module';
import { AdminMobileMenuModule } from './components/admin-mobile-menu/admin-mobile-menu.module';

describe('AdminLayoutComponent', () => {
  let pageObject: AdminLayoutComponentPo;
  let fixture: ComponentFixture<AdminLayoutComponent>;
  let breakpointObserverMock: BreakpointObserver;
  let breakpointObserverMatch$: BehaviorSubject<BreakpointState>;

  beforeEach(() => {
    breakpointObserverMock = mock(BreakpointObserver);

    breakpointObserverMatch$ = new BehaviorSubject<BreakpointState>({
      matches: false,
      breakpoints: {},
    });
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, ContainerModule, GridModule, MockModule(AdminDesktopMenuModule), MockModule(AdminMobileMenuModule)],
        declarations: [AdminLayoutComponent],
        providers: [providerOf(BreakpointObserver, breakpointObserverMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutComponent);
    pageObject = new AdminLayoutComponentPo(fixture);
    when(breakpointObserverMock.observe(anything())).thenReturn(breakpointObserverMatch$);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show admin mobile menu', () => {
    fixture.detectChanges();

    expect(pageObject.adminDesktopMenu).toBeNull();
    expect(pageObject.adminMobileMenu).toBeTruthy();
    expect(pageObject.isDesktopScreen).toBeFalsy();
  });

  it('should show admin desktop menu', () => {
    fixture.detectChanges();

    breakpointObserverMatch$.next({
      matches: true,
      breakpoints: {},
    });
    fixture.detectChanges();

    expect(pageObject.adminMobileMenu).toBeNull();
    expect(pageObject.adminDesktopMenu).toBeTruthy();
    expect(pageObject.isDesktopScreen).toBeTruthy();
  });
});
