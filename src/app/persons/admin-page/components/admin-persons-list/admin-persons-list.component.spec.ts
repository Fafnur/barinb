import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { PERSONS_EXTENDED_STUB } from '@app/persons/manager';

import { AdminPersonCardModule } from '../admin-person-card/admin-person-card.module';
import { AdminPersonsListComponent } from './admin-persons-list.component';
import { AdminPersonsListComponentPo } from './admin-persons-list.po';

@Component({
  template: `<app-admin-persons-list [data]="data"></app-admin-persons-list>`,
})
class WrapperComponent {
  data = PERSONS_EXTENDED_STUB;
}

describe('AdminPersonsListComponent', () => {
  let pageObject: AdminPersonsListComponentPo<WrapperComponent>;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MockModule(AdminPersonCardModule)],
        declarations: [AdminPersonsListComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminPersonsListComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonCards.length).toBe(PERSONS_EXTENDED_STUB.length);
  });
});
