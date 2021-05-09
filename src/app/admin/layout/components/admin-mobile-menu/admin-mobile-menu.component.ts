import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AdminMenuService } from '@app/admin/menu';
import { NavigationLink } from '@app/core/navigation/common';

@Component({
  selector: 'app-admin-mobile-menu',
  templateUrl: './admin-mobile-menu.component.html',
  styleUrls: ['./admin-mobile-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminMobileMenuComponent implements OnInit {
  links!: NavigationLink[];

  constructor(private readonly adminMenuService: AdminMenuService) {}

  ngOnInit(): void {
    this.links = this.adminMenuService.links();
  }
}
