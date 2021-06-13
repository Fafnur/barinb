import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridBreakpointName } from '@app/ui/theme/utils';

import { ColumnComponent } from './column.component';
import { ColumnComponentPo } from './column.po';

@Component({
  template: `<app-column automation-id="column" [modes]="modes"></app-column>`,
})
export class WrapperComponent {
  modes: Partial<Record<GridBreakpointName, number>> = { [GridBreakpointName.Xs]: 4, [GridBreakpointName.Md]: 3 };
}

describe('ColumnComponent', () => {
  let pageObject: ColumnComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        declarations: [ColumnComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new ColumnComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.hasColumnClass('column-xs-4')).toBeTruthy();
    expect(pageObject.hasColumnClass('column-md-3')).toBeTruthy();
  });
});
