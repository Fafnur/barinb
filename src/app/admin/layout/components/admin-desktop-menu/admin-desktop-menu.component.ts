import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AdminMenuService } from '@app/admin/menu';
import { NavigationLink } from '@app/core/navigation/common';

@Component({
  selector: 'app-admin-desktop-menu',
  templateUrl: './admin-desktop-menu.component.html',
  styleUrls: ['./admin-desktop-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminDesktopMenuComponent implements OnInit {
  links!: NavigationLink[];

  constructor(private readonly adminMenuService: AdminMenuService) {}

  ngOnInit(): void {
    this.links = this.adminMenuService.links();
  }
}
