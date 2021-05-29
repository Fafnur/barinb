import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

import { BuildingExtended } from '@app/buildings/manager';

@Component({
  selector: 'app-admin-buildings-list',
  templateUrl: './admin-buildings-list.component.html',
  styleUrls: ['./admin-buildings-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBuildingsListComponent {
  @Input() set data(buildings: BuildingExtended[] | null) {
    this.buildings = buildings;
    this.changeDetectorRef.markForCheck();
  }

  buildings!: BuildingExtended[] | null;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  trackByFn(index: number, buildingExtended: BuildingExtended): number {
    return buildingExtended.id;
  }
}
