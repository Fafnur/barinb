import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

import { PersonExtended } from '@app/persons/manager';

@Component({
  selector: 'app-admin-persons-list',
  templateUrl: './admin-persons-list.component.html',
  styleUrls: ['./admin-persons-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPersonsListComponent {
  @Input() set data(persons: PersonExtended[] | null) {
    this.persons = persons;
    this.changeDetectorRef.markForCheck();
  }

  persons!: PersonExtended[] | null;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  trackByFn(index: number, personExtended: PersonExtended): number {
    return personExtended.id;
  }
}
