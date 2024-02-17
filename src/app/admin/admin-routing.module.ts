import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';
import {GuestListComponent} from "./guest-list/guest-list.component";
import {AddGuestComponent} from "./add-guest/add-guest.component";

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children:[
      {
        path: 'list',
        component: GuestListComponent
      },
      {
        path: 'add',
        component: AddGuestComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
