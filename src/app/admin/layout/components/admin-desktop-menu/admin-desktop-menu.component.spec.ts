import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPipes } from 'ng-mocks';

import { AdminMenuService } from '@app/admin/menu';
import { NavPathPipe } from '@app/core/navigation/shared';

import { AdminDesktopMenuComponent } from './admin-desktop-menu.component';

describe('AdminDesktopMenuComponent', () => {
  let component: AdminDesktopMenuComponent;
  let fixture: ComponentFixture<AdminDesktopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AdminDesktopMenuComponent, MockPipes(NavPathPipe)],
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
