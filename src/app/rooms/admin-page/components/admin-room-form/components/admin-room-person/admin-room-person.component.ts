import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { extractTouchedChanges } from '@app/core/forms/utils';
import { Person } from '@app/persons/common';
import { PersonService } from '@app/persons/service';
import { RoomField, ROOMS_IDS } from '@app/rooms/common';

@Component({
  selector: 'app-admin-room-person',
  templateUrl: './admin-room-person.component.html',
  styleUrls: ['./admin-room-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomPersonComponent implements OnInit, OnDestroy {
  @Input() control!: FormControl | null;

  persons!: Person[];

  readonly id = ROOMS_IDS[RoomField.Person];

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
