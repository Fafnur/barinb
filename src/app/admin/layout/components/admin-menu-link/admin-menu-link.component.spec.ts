import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ADMIN_MENU_LINKS } from '@app/admin/menu';
import { NavigationSharedModule } from '@app/core/navigation/shared';

import { AdminMenuLinkComponent } from './admin-menu-link.component';
import { AdminMenuLinkComponentPo } from './admin-menu-link.po';

@Component({
  template: `<app-admin-menu-link automation-id="admin-menu-link" [link]="link"></app-admin-menu-link>`,
})
class WrapperComponent {
  link = ADMIN_MENU_LINKS[0];
}

describe('AdminMenuLinkComponent', () => {
  let pageObject: AdminMenuLinkComponentPo<WrapperComponent>;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, NavigationSharedModule],
        declarations: [AdminMenuLinkComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminMenuLinkComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should create admin menu links', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminMenuLink).toBeTruthy();
  });

  it('should set admin menu link label', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminMenuLinkText).toBe(ADMIN_MENU_LINKS[0].label);
  });

  it('should set admin menu link href', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminMenuLinkHref).toBe(`/${ADMIN_MENU_LINKS[0].route}`);
  });
});
