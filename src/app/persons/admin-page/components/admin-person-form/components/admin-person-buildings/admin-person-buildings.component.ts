import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { Building } from '@app/buildings/common';
import { BuildingService } from '@app/buildings/service';
import { extractTouchedChanges } from '@app/core/forms/utils';
import { PersonField, PERSONS_IDS } from '@app/persons/common';

@Component({
  selector: 'app-admin-person-buildings',
  templateUrl: './admin-person-buildings.component.html',
  styleUrls: ['./admin-person-buildings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPersonBuildingsComponent implements OnInit, OnDestroy {
  @Input() control!: FormControl | null;

  buildings!: Building[];

  readonly id = PERSONS_IDS[PersonField.Buildings];

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly buildingService: BuildingService) {}

  ngOnInit(): void {
    if (this.control) {
      this.control.disable();

      extractTouchedChanges(this.control)
        .pipe(
          tap(() => this.changeDetectorRef.markForCheck()),
          takeUntil(this.destroy$)
        )
        .subscribe();

      this.buildingService.buildings$
        .pipe(
          tap((buildings) => {
            this.buildings = buildings;
            this.changeDetectorRef.markForCheck();
          }),
          takeUntil(this.destroy$)
        )
        .subscribe();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
