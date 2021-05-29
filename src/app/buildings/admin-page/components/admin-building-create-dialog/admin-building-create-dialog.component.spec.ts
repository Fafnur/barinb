import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MockComponents } from 'ng-mocks';
import { of } from 'rxjs';

import { BuildingFacade } from '@app/buildings/state';
import { FormErrorsService } from '@app/core/forms/errors';

import { AdminBuildingFormComponent } from '../admin-building-form/admin-building-form.component';
import { AdminBuildingCreateDialogComponent } from './admin-building-create-dialog.component';

describe('AdminBuildingCreateDialogComponent', () => {
  let component: AdminBuildingCreateDialogComponent;
  let fixture: ComponentFixture<AdminBuildingCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatButtonModule, MatSnackBarModule, ReactiveFormsModule],
      declarations: [AdminBuildingCreateDialogComponent, MockComponents(AdminBuildingFormComponent)],
      providers: [
        {
          provide: BuildingFacade,
          useValue: {
            buildingAdded$: of(),
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
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
