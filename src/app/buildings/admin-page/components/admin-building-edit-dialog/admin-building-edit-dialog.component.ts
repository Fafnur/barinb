import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { BuildingField, BUILDINGS_IDS } from '@app/buildings/common';
import { BuildingExtended } from '@app/buildings/manager';
import { BuildingFacade } from '@app/buildings/state';
import { FormErrorsService } from '@app/core/forms/errors';

@Component({
  selector: 'app-admin-building-edit-dialog',
  templateUrl: './admin-building-edit-dialog.component.html',
  styleUrls: ['./admin-building-edit-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBuildingEditDialogComponent implements OnInit, OnDestroy {
  form = new FormGroup({});

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly buildingFacade: BuildingFacade,
    private readonly formErrorsService: FormErrorsService,
    private readonly matDialogRef: MatDialogRef<AdminBuildingEditDialogComponent>,
    private readonly matSnackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public readonly buildingExtended: BuildingExtended
  ) {}

  ngOnInit(): void {
    this.buildingFacade.buildingChanged$
      .pipe(
        tap(() => {
          this.matDialogRef.close(true);
          this.matSnackBar.open('Здание успешно изменено!', '', { duration: 5000 });
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
      this.buildingFacade.changeBuilding({
        ...this.form.value,
        [BuildingField.ID]: this.buildingExtended.id,
      });
    } else {
      this.formErrorsService.scrollToFirstError(this.form, BUILDINGS_IDS);
    }
    this.changeDetectorRef.markForCheck();
  }
}
