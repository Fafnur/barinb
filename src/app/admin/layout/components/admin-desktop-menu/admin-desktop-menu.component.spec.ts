import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDesktopMenuComponent } from './admin-desktop-menu.component';

describe('AdminDesktopMenuComponent', () => {
  let component: AdminDesktopMenuComponent;
  let fixture: ComponentFixture<AdminDesktopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDesktopMenuComponent ]
    })
    .compileComponents();
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
