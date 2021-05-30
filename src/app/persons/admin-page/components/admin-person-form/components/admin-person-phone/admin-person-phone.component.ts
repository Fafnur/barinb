import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { extractTouchedChanges } from '@app/core/forms/utils';
import { PersonField, PERSONS_IDS } from '@app/persons/common';

@Component({
  selector: 'app-admin-person-phone',
  templateUrl: './admin-person-phone.component.html',
  styleUrls: ['./admin-person-phone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPersonPhoneComponent implements OnInit, OnDestroy {
  @Input() control!: FormControl | null;

  readonly id = PERSONS_IDS[PersonField.Phone];

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
