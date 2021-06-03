import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterTestingModule } from '@angular/router/testing';
import { mock, when } from 'ts-mockito';

import { ADMIN_MENU_LINKS, AdminMenuService } from '@app/admin/menu';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { providerOf } from '@app/core/testing';

import { AdminMobileMenuComponent } from './admin-mobile-menu.component';
import { AdminMobileMenuComponentPo } from './admin-mobile-menu.po';

describe('AdminMobileMenuComponent', () => {
  let pageObject: AdminMobileMenuComponentPo;
  let fixture: ComponentFixture<AdminMobileMenuComponent>;
  let adminMenuServiceMock: AdminMenuService;

  beforeEach(() => {
    adminMenuServiceMock = mock(AdminMenuService);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatTabsModule, NavigationSharedModule],
      declarations: [AdminMobileMenuComponent],
      providers: [providerOf(AdminMenuService, adminMenuServiceMock)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMobileMenuComponent);
    pageObject = new AdminMobileMenuComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should create admin menu links', () => {
    when(adminMenuServiceMock.links()).thenReturn(ADMIN_MENU_LINKS);

    fixture.detectChanges();

    expect(pageObject.adminMobileMenuLinks.length).toBe(ADMIN_MENU_LINKS.length);
  });

  it('should not create links', () => {
    when(adminMenuServiceMock.links()).thenReturn([]);

    fixture.detectChanges();

    expect(pageObject.adminMobileMenuLinks.length).toBe(0);
  });

  it('should set link href', () => {
    when(adminMenuServiceMock.links()).thenReturn([ADMIN_MENU_LINKS[0]]);

    fixture.detectChanges();

    expect(pageObject.adminMenuLinksHref).toEqual([`/${ADMIN_MENU_LINKS[0].route}`]);
  });

  it('should set link labels', () => {
    when(adminMenuServiceMock.links()).thenReturn([ADMIN_MENU_LINKS[0]]);

    fixture.detectChanges();

    expect(pageObject.adminMenuLinksText).toEqual([ADMIN_MENU_LINKS[0].label]);
  });
});
