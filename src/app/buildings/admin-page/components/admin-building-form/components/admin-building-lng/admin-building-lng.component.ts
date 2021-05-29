import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { BuildingField, BUILDINGS_IDS } from '@app/buildings/common';
import { extractTouchedChanges } from '@app/core/forms/utils';

@Component({
  selector: 'app-admin-building-lng',
  templateUrl: './admin-building-lng.component.html',
  styleUrls: ['./admin-building-lng.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBuildingLngComponent implements OnInit, OnDestroy {
  @Input() control!: FormControl | null;

  readonly id = BUILDINGS_IDS[BuildingField.Lng];

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.control) {
      extractTouchedChanges(this.control)
        .pipe(
          tap(() => this.changeDetectorRef.markForCheck()),
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
