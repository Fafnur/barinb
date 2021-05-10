import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTitleComponent } from './error-title.component';

describe('ErrorTitleComponent', () => {
  let component: ErrorTitleComponent;
  let fixture: ComponentFixture<ErrorTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
