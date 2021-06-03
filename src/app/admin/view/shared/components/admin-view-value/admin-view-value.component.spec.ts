import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminViewValueComponent } from './admin-view-value.component';

describe('AdminViewValueComponent', () => {
  let component: AdminViewValueComponent;
  let fixture: ComponentFixture<AdminViewValueComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AdminViewValueComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
