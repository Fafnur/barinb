import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from './container.component';
import { ContainerComponentPo } from './container.po';

@Component({
  template: `<app-container automation-id="container" [mode]="mode" [height]="height"></app-container>`,
})
export class WrapperComponent {
  mode: 'flex' | 'flex-row' | 'fluid' | null = 'flex';
  height: 'max-height' | null = null;
}

describe('ContainerComponent', () => {
  let pageObject: ContainerComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new ContainerComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should set class flex', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.hasContainerClass('is-flex')).toBeTruthy();
    expect(pageObject.hasContainerClass('is-fluid')).toBeFalsy();
    expect(pageObject.hasContainerClass('is-flex-row')).toBeFalsy();
  });

  it('should set class fluid', () => {
    fixtureWrapper.detectChanges();

    pageObject.setMode('fluid');
    fixtureWrapper.detectChanges();

    expect(pageObject.hasContainerClass('is-flex')).toBeFalsy();
    expect(pageObject.hasContainerClass('is-fluid')).toBeTruthy();
    expect(pageObject.hasContainerClass('is-flex-row')).toBeFalsy();
  });

  it('should set class flex-row', () => {
    fixtureWrapper.detectChanges();

    pageObject.setMode('flex-row');
    fixtureWrapper.detectChanges();

    expect(pageObject.hasContainerClass('is-flex')).toBeFalsy();
    expect(pageObject.hasContainerClass('is-fluid')).toBeFalsy();
    expect(pageObject.hasContainerClass('is-flex-row')).toBeTruthy();
  });

  it('should set class max-height', () => {
    fixtureWrapper.detectChanges();

    pageObject.setHeight('max-height');
    fixtureWrapper.detectChanges();

    expect(pageObject.hasContainerClass('is-max-height')).toBeTruthy();
  });
});
