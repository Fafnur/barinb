import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { BuildingExtended, BuildingManager } from '@app/buildings/manager';
import { GridBreakpointType, mediaBreakpointUp } from '@app/ui/theme/utils';

@Component({
  selector: 'app-building-admin-page',
  templateUrl: './building-admin-page.component.html',
  styleUrls: ['./building-admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuildingAdminPageComponent implements OnInit, OnDestroy {
  isDesktopScreen = false;

  buildings!: BuildingExtended[];

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly breakpointObserver: BreakpointObserver,
    private readonly buildingManager: BuildingManager
  ) {}

  ngOnInit(): void {
    this.buildingManager.buildingsExtended$
      .pipe(
        tap((buildings) => {
          this.buildings = buildings;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.breakpointObserver
      .observe(mediaBreakpointUp(GridBreakpointType.Lg))
      .pipe(
        tap((breakpoints) => {
          this.isDesktopScreen = breakpoints.matches;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
