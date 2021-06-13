import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { HelpDialogComponent } from './help-dialog.component';
import { HelpDialogComponentPo } from './help-dialog.po';

describe('HelpDialogComponent', () => {
  let pageObject: HelpDialogComponentPo;
  let fixture: ComponentFixture<HelpDialogComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [MatDialogModule, MatButtonModule],
        declarations: [HelpDialogComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpDialogComponent);
    pageObject = new HelpDialogComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show dialog content', () => {
    fixture.detectChanges();

    expect(pageObject.helpDialogTitleText).toBe('О приложении BARINB');
    expect(pageObject.helpDialogCloseText).toBe('Закрыть');
  });
});
