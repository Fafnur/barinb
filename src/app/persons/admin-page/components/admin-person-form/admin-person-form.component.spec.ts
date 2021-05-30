import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MockModule } from 'ng-mocks';

import { FormsSharedModule } from '@app/core/forms/shared';
import { RowModule } from '@app/ui/row';

import { AdminPersonFormComponent } from './admin-person-form.component';
import { AdminPersonAvatarModule } from './components/admin-person-avatar/admin-person-avatar.module';
import { AdminPersonBuildingsModule } from './components/admin-person-buildings/admin-person-buildings.module';
import { AdminPersonFirstnameModule } from './components/admin-person-firstname/admin-person-firstname.module';
import { AdminPersonLastnameModule } from './components/admin-person-lastname/admin-person-lastname.module';
import { AdminPersonMiddlenameModule } from './components/admin-person-middlename/admin-person-middlename.module';
import { AdminPersonPhoneModule } from './components/admin-person-phone/admin-person-phone.module';

describe('AdminPersonFormComponent', () => {
  let component: AdminPersonFormComponent;
  let fixture: ComponentFixture<AdminPersonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        FormsSharedModule,
        RowModule,
        ReactiveFormsModule,
        MockModule(AdminPersonLastnameModule),
        MockModule(AdminPersonMiddlenameModule),
        MockModule(AdminPersonPhoneModule),
        MockModule(AdminPersonFirstnameModule),
        MockModule(AdminPersonAvatarModule),
        MockModule(AdminPersonBuildingsModule),
      ],
      declarations: [AdminPersonFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
