import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewLabelComponent } from './admin-view-label.component';

describe('AdminViewLabelComponent', () => {
  let component: AdminViewLabelComponent;
  let fixture: ComponentFixture<AdminViewLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminViewLabelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
