import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MockModule } from 'ng-mocks';

import { PERSON_EXTENDED_STUB } from '@app/persons/manager';

import { AdminPersonActionsModule } from '../admin-person-actions/admin-person-actions.module';
import { AdminPersonsTableComponent } from './admin-persons-table.component';
import { AdminPersonsTableComponentPo } from './admin-persons-table.po';

@Component({
  template: `<app-admin-persons-table [data]="data"></app-admin-persons-table>`,
})
class WrapperComponent {
  data = [PERSON_EXTENDED_STUB];
}

describe('AdminPersonsTableComponent', () => {
  let pageObject: AdminPersonsTableComponentPo<WrapperComponent>;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
  let datePipe: DatePipe;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatTableModule, MatButtonModule, MatIconModule, MockModule(AdminPersonActionsModule)],
        declarations: [AdminPersonsTableComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AdminPersonsTableComponentPo(fixtureWrapper);
    datePipe = new DatePipe('en');
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
    expect(pageObject.adminPersonsTable).toBeTruthy();
  });

  it('should show empty template', () => {
    fixtureWrapper.detectChanges();

    pageObject.setData([]);
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonsEmptyText).toBe(
      'Нет созданных собственников. Для того, чтобы добавить здание, нажмите - "Добавить собственника".'
    );
  });

  it('should show column id', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonIdLabelText).toBe('ID');
    expect(pageObject.adminPersonIdValueText).toEqual([PERSON_EXTENDED_STUB.id.toString()]);
  });

  it('should column lastName', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonLastnameLabelText).toBe('Фамилия');
    expect(pageObject.adminPersonLastnameValueText).toEqual([PERSON_EXTENDED_STUB.lastName]);
  });

  it('should column firstName', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonFirstnameLabelText).toBe('Имя');
    expect(pageObject.adminPersonFirstnameValueText).toEqual([PERSON_EXTENDED_STUB.firstName]);
  });

  it('should column middleName', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonMiddlenameLabelText).toBe('Отчество');
    expect(pageObject.adminPersonMiddlenameValueText).toEqual([PERSON_EXTENDED_STUB.middleName]);
  });

  it('should column phone', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonPhoneLabelText).toBe('Телефон');
    expect(pageObject.adminPersonPhoneValueText).toEqual([PERSON_EXTENDED_STUB.phone]);
  });

  it('should column created', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonCreatedLabelText).toBe('Дата создания');
    expect(pageObject.adminPersonCreatedValueText).toEqual([datePipe.transform(PERSON_EXTENDED_STUB.created, 'longDate')]);
  });

  it('should column updated', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonUpdatedLabelText).toBe('Дата обновления');
    expect(pageObject.adminPersonUpdatedValueText).toEqual([datePipe.transform(PERSON_EXTENDED_STUB.updated, 'longDate')]);
  });

  it('should column actions', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonActionsLabelText).toBe('Действия');
    expect(pageObject.adminPersonActionsValueText.length).toEqual(1);
  });
});
