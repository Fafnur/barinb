import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MockComponents } from 'ng-mocks';
import { of } from 'rxjs';

import { BuildingExtended } from '@app/buildings/manager';
import { FormErrorsService } from '@app/core/forms/errors';
import { PersonFacade } from '@app/persons/state';

import { AdminPersonFormComponent } from '../admin-person-form/admin-person-form.component';
import { AdminPersonEditDialogComponent } from './admin-person-edit-dialog.component';

describe('AdminPersonEditDialogComponent', () => {
  let component: AdminPersonEditDialogComponent;
  let fixture: ComponentFixture<AdminPersonEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatButtonModule, MatSnackBarModule, ReactiveFormsModule],
      declarations: [AdminPersonEditDialogComponent, MockComponents(AdminPersonFormComponent)],
      providers: [
        {
          provide: PersonFacade,
          useValue: {
            changePerson: jest.fn(),
            personChanged$: of(),
          } as Partial<PersonFacade>,
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
    fixture = TestBed.createComponent(AdminPersonEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
