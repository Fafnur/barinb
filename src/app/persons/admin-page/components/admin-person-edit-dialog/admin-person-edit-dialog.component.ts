import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { FormErrorsService } from '@app/core/forms/errors';
import { PersonField, PERSONS_IDS } from '@app/persons/common';
import { PersonExtended } from '@app/persons/manager';
import { PersonFacade } from '@app/persons/state';

@Component({
  selector: 'app-admin-person-edit-dialog',
  templateUrl: './admin-person-edit-dialog.component.html',
  styleUrls: ['./admin-person-edit-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPersonEditDialogComponent implements OnInit, OnDestroy {
  form = new FormGroup({});

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly personFacade: PersonFacade,
    private readonly formErrorsService: FormErrorsService,
    private readonly matDialogRef: MatDialogRef<AdminPersonEditDialogComponent>,
    private readonly matSnackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public readonly person: PersonExtended
  ) {}

  ngOnInit(): void {
    this.personFacade.personChanged$
      .pipe(
        tap(() => {
          this.matDialogRef.close(true);
          this.matSnackBar.open('Собственник успешно изменен!', '', { duration: 5000 });
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.personFacade.changePerson({ ...this.form.value, [PersonField.ID]: this.person.id });
    } else {
      this.formErrorsService.scrollToFirstError(this.form, PERSONS_IDS);
    }
    this.changeDetectorRef.markForCheck();
  }
}
