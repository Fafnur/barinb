import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigationPath } from '@app/core/navigation/common';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { PERSON_STUB } from '@app/persons/state';

import { AdminPersonLinkComponent } from './admin-person-link.component';
import { AdminPersonLinkComponentPo } from './admin-person-link.po';

@Component({
  template: `<app-admin-person-link [person]="person"></app-admin-person-link>`,
})
class WrapperComponent {
  person = PERSON_STUB;
}

describe('AdminPersonLinkComponent', () => {
  let pageObject: AdminPersonLinkComponentPo<WrapperComponent>;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, MatIconModule, MatButtonModule, NavigationSharedModule],
        declarations: [AdminPersonLinkComponent, WrapperComponent],
        providers: [],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminPersonLinkComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should create admin person link', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonLink).toBeTruthy();
  });

  it('should set admin person link label', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonLinkText).toBe('person');
  });

  it('should set admin person link href', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonLinkHref).toBe(`/${NavigationPath.AdminPersonsPage}?person=${PERSON_STUB.id}`);
  });
});
