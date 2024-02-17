import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPage } from './details.page';
import {InviteComponent} from "./invite/invite.component";
import {RsvpComponent} from "./rsvp/rsvp.component";

const routes: Routes = [
  {
    path: '',
    component: DetailsPage,
    children:[
      {
        path: 'invite',
        component: InviteComponent
      },
      {
        path: 'rsvp',
        component: RsvpComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPageRoutingModule {}
