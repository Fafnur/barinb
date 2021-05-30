import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { extractTouchedChanges } from '@app/core/forms/utils';
import { PersonField, PERSONS_IDS } from '@app/persons/common';

@Component({
  selector: 'app-admin-person-middlename',
  templateUrl: './admin-person-middlename.component.html',
  styleUrls: ['./admin-person-middlename.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPersonMiddlenameComponent implements OnInit, OnDestroy {
  @Input() control!: FormControl | null;

  readonly id = PERSONS_IDS[PersonField.MiddleName];

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
