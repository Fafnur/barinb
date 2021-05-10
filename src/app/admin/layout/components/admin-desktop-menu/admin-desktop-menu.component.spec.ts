import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents } from 'ng-mocks';

import { AdminMenuService } from '@app/admin/menu';

import { AdminMenuLinkComponent } from '../admin-menu-link/admin-menu-link.component';
import { AdminDesktopMenuComponent } from './admin-desktop-menu.component';

describe('AdminDesktopMenuComponent', () => {
  let component: AdminDesktopMenuComponent;
  let fixture: ComponentFixture<AdminDesktopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AdminDesktopMenuComponent, MockComponents(AdminMenuLinkComponent)],
      providers: [
        {
          provide: AdminMenuService,
          useValue: {
            links: jest.fn(() => []),
          } as Partial<AdminMenuService>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDesktopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
