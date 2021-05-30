import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MockModule } from 'ng-mocks';

import { AdminBuildingLinkModule } from '@app/admin/links/shared';
import { AdminViewSharedModule } from '@app/admin/view/shared';
import { PersonExtended } from '@app/persons/manager';
import { PersonSharedModule } from '@app/persons/shared';

import { AdminPersonViewDialogComponent } from './admin-person-view-dialog.component';

describe('AdminPersonViewDialogComponent', () => {
  let component: AdminPersonViewDialogComponent;
  let fixture: ComponentFixture<AdminPersonViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatButtonModule,
        PersonSharedModule,
        AdminViewSharedModule,
        MockModule(AdminBuildingLinkModule),
        MockModule(PersonSharedModule),
      ],
      declarations: [AdminPersonViewDialogComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { buildingsExtended: [] as any } as PersonExtended,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
