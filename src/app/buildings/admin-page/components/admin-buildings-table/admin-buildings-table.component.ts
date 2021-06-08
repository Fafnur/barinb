import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { BuildingField } from '@app/buildings/common';
import { BuildingExtended } from '@app/buildings/manager';

@Component({
  selector: 'app-admin-buildings-table',
  templateUrl: './admin-buildings-table.component.html',
  styleUrls: ['./admin-buildings-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBuildingsTableComponent {
  @Input() set data(buildings: BuildingExtended[]) {
    this.buildings = buildings;
    if (!this.dataSource) {
      this.dataSource = new MatTableDataSource<BuildingExtended>();
    }

    this.dataSource.data = this.buildings ?? [];

    this.changeDetectorRef.markForCheck();
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  BuildingField = BuildingField;

  buildings!: BuildingExtended[];
  dataSource!: MatTableDataSource<BuildingExtended>;

  displayedColumns: string[] = [
    BuildingField.ID,
    BuildingField.Name,
    BuildingField.City,
    BuildingField.Address,
    BuildingField.Created,
    BuildingField.Updated,
    BuildingField.Rooms,
    BuildingField.Person,
    'actions',
  ];

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}
}
