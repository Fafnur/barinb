import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@app/core/forms/shared';
import { PERSON_EXTENDED_STUB } from '@app/persons/manager';
import { GridModule } from '@app/ui/grid';

import { AdminPersonFormComponent } from './admin-person-form.component';
import { PersonAdminFormComponentPo } from './admin-person-form.po';
import { AdminPersonAvatarModule } from './components/admin-person-avatar/admin-person-avatar.module';
import { AdminPersonFirstnameModule } from './components/admin-person-firstname/admin-person-firstname.module';
import { AdminPersonLastnameModule } from './components/admin-person-lastname/admin-person-lastname.module';
import { AdminPersonMiddlenameModule } from './components/admin-person-middlename/admin-person-middlename.module';
import { AdminPersonPhoneModule } from './components/admin-person-phone/admin-person-phone.module';

@Component({
  template: `<app-admin-person-form [form]="form"></app-admin-person-form>`,
})
export class WrapperComponent {
  form = new FormGroup({});
  person = PERSON_EXTENDED_STUB;
}

describe('AdminPersonFormComponent', () => {
  let pageObject: PersonAdminFormComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MatButtonModule,
          FormsSharedModule,
          GridModule,
          ReactiveFormsModule,
          MockModule(AdminPersonFirstnameModule),
          MockModule(AdminPersonLastnameModule),
          MockModule(AdminPersonMiddlenameModule),
          MockModule(AdminPersonPhoneModule),
          MockModule(AdminPersonAvatarModule),
        ],
        declarations: [AdminPersonFormComponent, WrapperComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new PersonAdminFormComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show forms fields', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.adminPersonFirstname).toBeTruthy();
    expect(pageObject.adminPersonLastname).toBeTruthy();
    expect(pageObject.adminPersonMiddlename).toBeTruthy();
    expect(pageObject.adminPersonPhone).toBeTruthy();
    expect(pageObject.adminPersonAvatar).toBeTruthy();
  });
});
