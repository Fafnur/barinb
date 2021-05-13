import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBuildingLinkComponent } from './admin-building-link.component';

describe('AdminBuildingLinkComponent', () => {
  let component: AdminBuildingLinkComponent;
  let fixture: ComponentFixture<AdminBuildingLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBuildingLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
