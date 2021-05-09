import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMobileMenuComponent } from './admin-mobile-menu.component';

describe('AdminMobileMenuComponent', () => {
  let component: AdminMobileMenuComponent;
  let fixture: ComponentFixture<AdminMobileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMobileMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
