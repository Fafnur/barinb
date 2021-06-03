import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminViewLabelComponent } from './admin-view-label.component';

describe('AdminViewLabelComponent', () => {
  let component: AdminViewLabelComponent;
  let fixture: ComponentFixture<AdminViewLabelComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AdminViewLabelComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
