import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationPath } from '@app/core/navigation/common';
import { LayoutComponent, LayoutModule } from '@app/ui/theme/layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: (): Promise<any> => import('@app/booking/page').then((modules) => modules.BookingPageModule),
      },
      {
        path: NavigationPath.Rooms,
        loadChildren: (): Promise<any> => import('@app/rooms/page').then((modules) => modules.RoomPageModule),
      },
      {
        path: NavigationPath.Admin,
        loadChildren: (): Promise<any> => import('@app/admin/page').then((modules) => modules.AdminPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
