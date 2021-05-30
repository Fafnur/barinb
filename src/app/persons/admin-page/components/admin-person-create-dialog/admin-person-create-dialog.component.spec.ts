import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MockModule } from 'ng-mocks';
import { of } from 'rxjs';

import { FormErrorsService } from '@app/core/forms/errors';
import { PersonFacade } from '@app/persons/state';

import { AdminPersonFormModule } from '../admin-person-form/admin-person-form.module';
import { AdminPersonCreateDialogComponent } from './admin-person-create-dialog.component';

describe('AdminPersonCreateDialogComponent', () => {
  let component: AdminPersonCreateDialogComponent;
  let fixture: ComponentFixture<AdminPersonCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatButtonModule, MatSnackBarModule, ReactiveFormsModule, MockModule(AdminPersonFormModule)],
      declarations: [AdminPersonCreateDialogComponent],
      providers: [
        {
          provide: PersonFacade,
          useValue: {
            personAdded$: of(),
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
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
