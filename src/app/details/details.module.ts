import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import {RsvpComponent} from "./rsvp/rsvp.component";
import {InviteComponent} from "./invite/invite.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule
  ],
  declarations: [DetailsPage,
  RsvpComponent,
  InviteComponent]
})
export class DetailsPageModule {}
