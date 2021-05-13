import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPersonLinkComponent } from './admin-person-link.component';

describe('AdminPersonLinkComponent', () => {
  let component: AdminPersonLinkComponent;
  let fixture: ComponentFixture<AdminPersonLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPersonLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
