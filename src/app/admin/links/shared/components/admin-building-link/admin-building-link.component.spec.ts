import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

import { BUILDING_STUB } from '@app/buildings/state';
import { NavigationPath } from '@app/core/navigation/common';
import { NavigationSharedModule } from '@app/core/navigation/shared';

import { AdminBuildingLinkComponent } from './admin-building-link.component';
import { AdminBuildingLinkComponentPo } from './admin-building-link.po';

@Component({
  template: `<app-admin-building-link [building]="building"></app-admin-building-link>`,
})
class WrapperComponent {
  building = BUILDING_STUB;
}

describe('AdminBuildingLinkComponent', () => {
  let pageObject: AdminBuildingLinkComponentPo<WrapperComponent>;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatIconModule, MatButtonModule, NavigationSharedModule],
      declarations: [AdminBuildingLinkComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminBuildingLinkComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should create admin building link', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingLink).toBeTruthy();
  });

  it('should set admin building link label', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingLinkText).toBe('apartment');
  });

  it('should set admin building link href', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingLinkHref).toBe(`/${NavigationPath.AdminBuildingsPage}?building=${BUILDING_STUB.id}`);
  });
});
