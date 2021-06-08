import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { BUILDINGS_EXTENDED_STUB } from '@app/buildings/manager';

import { AdminBuildingCardModule } from '../admin-building-card/admin-building-card.module';
import { AdminBuildingsListComponent } from './admin-buildings-list.component';
import { AdminBuildingsListComponentPo } from './admin-buildings-list.po';

@Component({
  template: `<app-admin-buildings-list [data]="data"></app-admin-buildings-list>`,
})
class WrapperComponent {
  data = BUILDINGS_EXTENDED_STUB;
}

describe('AdminBuildingsListComponent', () => {
  let pageObject: AdminBuildingsListComponentPo<WrapperComponent>;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MockModule(AdminBuildingCardModule)],
        declarations: [AdminBuildingsListComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminBuildingsListComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminBuildingCards.length).toBe(BUILDINGS_EXTENDED_STUB.length);
  });
});
