import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { BUILDINGS_IDS } from '@app/buildings/common';
import { BuildingFacade } from '@app/buildings/state';
import { FormErrorsService } from '@app/core/forms/errors';
import { PersonFacade } from '@app/persons/state';

@Component({
  selector: 'app-admin-building-create-dialog',
  templateUrl: './admin-building-create-dialog.component.html',
  styleUrls: ['./admin-building-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBuildingCreateDialogComponent implements OnInit, OnDestroy {
  form = new FormGroup({});

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly buildingFacade: BuildingFacade,
    private readonly personFacade: PersonFacade,
    private readonly formErrorsService: FormErrorsService,
    private readonly matDialogRef: MatDialogRef<AdminBuildingCreateDialogComponent>,
    private readonly matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buildingFacade.buildingAdded$
      .pipe(
        tap((building) => {
          this.personFacade.addPersonBuilding({ id: building.person, building: building.id });
          this.matDialogRef.close(true);
          this.matSnackBar.open('Отель успешно создан!', '', { duration: 5000 });
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
      this.buildingFacade.addBuilding(this.form.value);
    } else {
      this.formErrorsService.scrollToFirstError(this.form, BUILDINGS_IDS);
    }
    this.changeDetectorRef.markForCheck();
  }
}
