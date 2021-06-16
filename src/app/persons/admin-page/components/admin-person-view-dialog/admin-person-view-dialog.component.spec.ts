import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { AdminBuildingLinkModule } from '@app/admin/links/shared';
import { AdminViewSharedModule } from '@app/admin/view/shared';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { PERSON_EXTENDED_STUB } from '@app/persons/manager';
import { PersonSharedModule } from '@app/persons/shared';

import { AdminPersonViewDialogComponent } from './admin-person-view-dialog.component';
import { AdminPersonViewDialogComponentPo } from './admin-person-view-dialog.po';

describe('AdminPersonViewDialogComponent', () => {
  let pageObject: AdminPersonViewDialogComponentPo;
  let fixture: ComponentFixture<AdminPersonViewDialogComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatDialogModule,
          MatButtonModule,
          AdminViewSharedModule,
          PersonSharedModule,
          NavigationSharedModule,
          MockModule(AdminBuildingLinkModule),
        ],
        declarations: [AdminPersonViewDialogComponent],
        providers: [
          {
            provide: MAT_DIALOG_DATA,
            useValue: PERSON_EXTENDED_STUB,
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonViewDialogComponent);
    pageObject = new AdminPersonViewDialogComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should set person name', () => {
    fixture.detectChanges();

    expect(pageObject.adminPersonNameLabelText).toBe('ФИО');
    expect(pageObject.adminPersonNameValueText).toBe(`${PERSON_EXTENDED_STUB.firstName} ${PERSON_EXTENDED_STUB.lastName}`);
  });

  it('should set phone', () => {
    fixture.detectChanges();

    expect(pageObject.adminPersonPhoneLabelText).toBe('Телефон');
    expect(pageObject.adminPersonPhoneValueText).toBe(PERSON_EXTENDED_STUB.phone);
  });

  it('should set person avatar', () => {
    fixture.detectChanges();

    expect(pageObject.adminPersonAvatarLabelText).toBe('Аватар');
    expect(pageObject.adminPersonAvatarValueSrc).toBe(PERSON_EXTENDED_STUB.avatar);
  });

  it('should set person buildings', () => {
    fixture.detectChanges();

    expect(pageObject.adminPersonBuildingsLabelText).toBe('Отели');
    expect(pageObject.adminPersonBuildingsValue.length).toBe(PERSON_EXTENDED_STUB.buildingsExtended.length);
  });
});
