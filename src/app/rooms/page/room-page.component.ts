import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { NavigationPath } from '@app/core/navigation/common';
import { NavigationService } from '@app/core/navigation/service';
import { RoomExtended, RoomManager } from '@app/rooms/manager';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomPageComponent implements OnInit {
  roomExtended$!: Observable<RoomExtended>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly roomManager: RoomManager,
    private readonly navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.roomExtended$ = this.roomManager.roomExtended$(+this.activatedRoute.snapshot.params?.id);
  }

  onBack(): void {
    void this.navigationService.navigate(NavigationPath.Home);
  }
}
