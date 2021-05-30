import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { PersonField } from '@app/persons/common';
import { PersonExtended } from '@app/persons/manager';

@Component({
  selector: 'app-admin-persons-table',
  templateUrl: './admin-persons-table.component.html',
  styleUrls: ['./admin-persons-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPersonsTableComponent {
  @Input() set data(persons: PersonExtended[]) {
    this.persons = persons;
    if (!this.dataSource) {
      this.dataSource = new MatTableDataSource<PersonExtended>();
    }

    this.dataSource.data = this.persons ?? [];
    this.changeDetectorRef.markForCheck();
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  PersonField = PersonField;

  persons!: PersonExtended[];
  dataSource!: MatTableDataSource<PersonExtended>;

  displayedColumns: string[] = [
    PersonField.ID,
    PersonField.LastName,
    PersonField.FirstName,
    PersonField.MiddleName,
    PersonField.Phone,
    PersonField.Created,
    PersonField.Updated,
    'actions',
  ];

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}
}
