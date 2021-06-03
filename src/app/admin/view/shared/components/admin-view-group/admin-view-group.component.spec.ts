import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminViewGroupComponent } from './admin-view-group.component';

describe('AdminViewGroupComponent', () => {
  let component: AdminViewGroupComponent;
  let fixture: ComponentFixture<AdminViewGroupComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AdminViewGroupComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
