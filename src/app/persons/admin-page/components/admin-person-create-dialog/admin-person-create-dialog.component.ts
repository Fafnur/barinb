import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { FormErrorsService } from '@app/core/forms/errors';
import { PERSONS_IDS } from '@app/persons/common';
import { PersonFacade } from '@app/persons/state';

@Component({
  selector: 'app-admin-person-create-dialog',
  templateUrl: './admin-person-create-dialog.component.html',
  styleUrls: ['./admin-person-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPersonCreateDialogComponent implements OnInit, OnDestroy {
  form = new FormGroup({});

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly personFacade: PersonFacade,
    private readonly formErrorsService: FormErrorsService,
    private readonly matDialogRef: MatDialogRef<AdminPersonCreateDialogComponent>,
    private readonly matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.personFacade.personAdded$
      .pipe(
        tap(() => {
          this.matDialogRef.close(true);
          this.matSnackBar.open('Собственник успешно создан!', '', { duration: 5000 });
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
      this.personFacade.addPerson(this.form.value);
    } else {
      this.formErrorsService.scrollToFirstError(this.form, PERSONS_IDS);
    }
    this.changeDetectorRef.markForCheck();
  }
}
