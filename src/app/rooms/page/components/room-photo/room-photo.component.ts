import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { GridBreakpointType, mediaBreakpointUp } from '@app/ui/theme/utils';

import { RoomPhotosDialogComponent } from './components/room-photos-dialog/room-photos-dialog.component';

@Component({
  selector: 'app-room-photo',
  templateUrl: './room-photo.component.html',
  styleUrls: ['./room-photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomPhotoComponent implements OnInit, OnDestroy {
  @Input() photos!: string[];

  isDesktopScreen = false;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly breakpointObserver: BreakpointObserver,
    private readonly matDialog: MatDialog
  ) {}

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

  onShowAll(): void {
    this.matDialog.open(RoomPhotosDialogComponent);
  }
}
