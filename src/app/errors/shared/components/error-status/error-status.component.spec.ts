import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorStatusComponent } from './error-status.component';

describe('ErrorStatusComponent', () => {
  let component: ErrorStatusComponent;
  let fixture: ComponentFixture<ErrorStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
