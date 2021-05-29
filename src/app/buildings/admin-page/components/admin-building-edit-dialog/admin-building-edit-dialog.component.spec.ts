import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MockComponents } from 'ng-mocks';
import { of } from 'rxjs';

import { BuildingExtended } from '@app/buildings/manager';
import { BuildingFacade } from '@app/buildings/state';
import { FormErrorsService } from '@app/core/forms/errors';

import { AdminBuildingFormComponent } from '../admin-building-form/admin-building-form.component';
import { AdminBuildingEditDialogComponent } from './admin-building-edit-dialog.component';

describe('AdminRoomEditDialogComponent', () => {
  let component: AdminBuildingEditDialogComponent;
  let fixture: ComponentFixture<AdminBuildingEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatButtonModule, MatSnackBarModule, ReactiveFormsModule],
      declarations: [AdminBuildingEditDialogComponent, MockComponents(AdminBuildingFormComponent)],
      providers: [
        {
          provide: BuildingFacade,
          useValue: {
            buildingChanged$: of(),
          } as Partial<BuildingFacade>,
        },
        {
          provide: FormErrorsService,
          useValue: {
            scrollToFirstError: jest.fn(),
          } as Partial<FormErrorsService>,
        },
        {
          provide: MatDialogRef,
          useValue: {
            close: jest.fn(),
          } as Partial<MatDialogRef<any>>,
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {} as BuildingExtended,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
