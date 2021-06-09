import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorTitleComponent } from './error-title.component';

describe('ErrorTitleComponent', () => {
  let fixture: ComponentFixture<ErrorTitleComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ErrorTitleComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorTitleComponent);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
