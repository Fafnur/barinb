import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { BuildingField, BUILDINGS_IDS } from '@app/buildings/common';
import { extractTouchedChanges } from '@app/core/forms/utils';
import { Person } from '@app/persons/common';
import { PersonService } from '@app/persons/service';

@Component({
  selector: 'app-admin-building-person',
  templateUrl: './admin-building-person.component.html',
  styleUrls: ['./admin-building-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBuildingPersonComponent implements OnInit, OnDestroy {
  @Input() control!: FormControl | null;

  persons!: Person[];

  readonly id = BUILDINGS_IDS[BuildingField.Person];

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly personService: PersonService) {}

  ngOnInit(): void {
    if (this.control) {
      extractTouchedChanges(this.control)
        .pipe(
          tap(() => this.changeDetectorRef.markForCheck()),
          takeUntil(this.destroy$)
        )
        .subscribe();

      this.personService.persons$
        .pipe(
          tap((persons) => {
            this.persons = persons;
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
