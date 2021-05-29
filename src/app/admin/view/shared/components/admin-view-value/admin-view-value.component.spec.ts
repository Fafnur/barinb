import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewValueComponent } from './admin-view-value.component';

describe('AdminViewValueComponent', () => {
  let component: AdminViewValueComponent;
  let fixture: ComponentFixture<AdminViewValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminViewValueComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
