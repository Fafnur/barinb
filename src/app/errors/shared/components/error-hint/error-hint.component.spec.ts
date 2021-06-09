import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorHintComponent } from './error-hint.component';

describe('ErrorHintComponent', () => {
  let fixture: ComponentFixture<ErrorHintComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ErrorHintComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorHintComponent);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
