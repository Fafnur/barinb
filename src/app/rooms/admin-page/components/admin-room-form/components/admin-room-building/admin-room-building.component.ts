import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { Building } from '@app/buildings/common';
import { BuildingService } from '@app/buildings/service';
import { extractTouchedChanges } from '@app/core/forms/utils';
import { Person } from '@app/persons/common';
import { RoomField } from '@app/rooms/common';

@Component({
  selector: 'app-admin-room-building',
  templateUrl: './admin-room-building.component.html',
  styleUrls: ['./admin-room-building.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRoomBuildingComponent implements OnInit, OnDestroy {
  @Input() control!: FormControl | null;

  buildings!: Building[];
  buildingsSubscription!: Subscription;

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly buildingService: BuildingService) {}

  get person(): Person | null {
    return this.control?.parent?.get(RoomField.Person)?.value ?? null;
  }
  get personControl(): AbstractControl | null {
    return this.control?.parent?.get(RoomField.Person) ?? null;
  }

  ngOnInit(): void {
    if (this.control) {
      extractTouchedChanges(this.control)
        .pipe(
          tap(() => this.changeDetectorRef.markForCheck()),
          takeUntil(this.destroy$)
        )
        .subscribe();

      this.personControl?.valueChanges
        .pipe(
          tap((value) => {
            if (value) {
              this.subscribe(value);
            } else {
              this.unsubscribe();
              this.buildings = [];
            }
          }),
          takeUntil(this.destroy$)
        )
        .subscribe();
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }

  private unsubscribe(): void {
    if (this.buildingsSubscription) {
      this.buildingsSubscription.unsubscribe();
    }
  }

  private subscribe(id: number): void {
    this.unsubscribe();

    this.buildingsSubscription = this.buildingService
      .buildingsByPerson$(id)
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
