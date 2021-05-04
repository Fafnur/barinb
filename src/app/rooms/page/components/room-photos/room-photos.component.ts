import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { GridBreakpointType, mediaBreakpointUp } from '@app/ui/theme/utils';

@Component({
  selector: 'app-room-photos',
  templateUrl: './room-photos.component.html',
  styleUrls: ['./room-photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomPhotosComponent implements OnInit, OnDestroy {
  @Input() photos!: string[];

  isDesktopScreen = false;

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(mediaBreakpointUp(GridBreakpointType.Md))
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

  onShowAll(): void {}
}
