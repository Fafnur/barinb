import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { mock, when } from 'ts-mockito';

import { ADMIN_MENU_LINKS, AdminMenuService } from '@app/admin/menu';
import { providerOf } from '@app/core/testing';

import { AdminMenuLinkModule } from '../admin-menu-link/admin-menu-link.module';
import { AdminDesktopMenuComponent } from './admin-desktop-menu.component';
import { AdminDesktopMenuComponentPo } from './admin-desktop-menu.po';

describe('AdminDesktopMenuComponent', () => {
  let pageObject: AdminDesktopMenuComponentPo;
  let fixture: ComponentFixture<AdminDesktopMenuComponent>;
  let adminMenuServiceMock: AdminMenuService;

  beforeEach(() => {
    adminMenuServiceMock = mock(AdminMenuService);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, MockModule(AdminMenuLinkModule)],
        declarations: [AdminDesktopMenuComponent],
        providers: [providerOf(AdminMenuService, adminMenuServiceMock)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDesktopMenuComponent);
    pageObject = new AdminDesktopMenuComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should create admin menu links', () => {
    when(adminMenuServiceMock.links()).thenReturn(ADMIN_MENU_LINKS);

    fixture.detectChanges();

    expect(pageObject.adminMenuLinks.length).toBe(ADMIN_MENU_LINKS.length);
  });

  it('should not create links', () => {
    when(adminMenuServiceMock.links()).thenReturn([]);

    fixture.detectChanges();

    expect(pageObject.adminMenuLinks.length).toBe(0);
  });
});
