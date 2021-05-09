import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents } from 'ng-mocks';

import { ColumnComponent, RowComponent } from '@app/ui/row';

import { AdminLayoutComponent } from './admin-layout.component';
import { AdminDesktopMenuComponent } from './components/admin-desktop-menu/admin-desktop-menu.component';
import { AdminMobileMenuComponent } from './components/admin-mobile-menu/admin-mobile-menu.component';

describe('AdminLayoutComponent', () => {
  let component: AdminLayoutComponent;
  let fixture: ComponentFixture<AdminLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AdminLayoutComponent,
        MockComponents(RowComponent, ColumnComponent, AdminDesktopMenuComponent, AdminMobileMenuComponent),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
