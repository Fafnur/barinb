import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { PersonExtended, PersonManager } from '@app/persons/manager';
import { GridBreakpointType, mediaBreakpointUp } from '@app/ui/theme/utils';

@Component({
  selector: 'app-persons-admin-page',
  templateUrl: './person-admin-page.component.html',
  styleUrls: ['./person-admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonAdminPageComponent implements OnInit, OnDestroy {
  isDesktopScreen = false;

  persons!: PersonExtended[];

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly breakpointObserver: BreakpointObserver,
    private readonly personManager: PersonManager
  ) {}

  ngOnInit(): void {
    this.personManager.personsExtended$
      .pipe(
        tap((persons) => {
          this.persons = persons;
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
