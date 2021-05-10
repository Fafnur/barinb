import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationPath } from '@app/core/navigation/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: NavigationPath.Rooms,
    pathMatch: 'full',
  },
  {
    path: NavigationPath.Rooms,
    loadChildren: (): Promise<any> => import('@app/rooms/admin-page').then((modules) => modules.RoomAdminPageModule),
  },
  {
    path: NavigationPath.Buildings,
    loadChildren: (): Promise<any> => import('@app/buildings/admin-page').then((modules) => modules.BuildingAdminPageModule),
  },
  {
    path: NavigationPath.Persons,
    loadChildren: (): Promise<any> => import('@app/persons/admin-page').then((modules) => modules.PersonAdminPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
