import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { RoomExtended, RoomManager } from '@app/rooms/manager';
import { GridBreakpointType, mediaBreakpointUp } from '@app/ui/theme/utils';

@Component({
  selector: 'app-room-admin-page',
  templateUrl: './room-admin-page.component.html',
  styleUrls: ['./room-admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomAdminPageComponent implements OnInit, OnDestroy {
  isDesktopScreen = false;

  rooms!: RoomExtended[];

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly breakpointObserver: BreakpointObserver,
    private readonly roomManager: RoomManager
  ) {}

  ngOnInit(): void {
    this.roomManager.roomsExtended$
      .pipe(
        tap((rooms) => {
          this.rooms = rooms;
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
