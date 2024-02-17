import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import {GuestListComponent} from "./guest-list/guest-list.component";
import {AddGuestComponent} from "./add-guest/add-guest.component";
import {MaskitoDirective} from "@maskito/angular";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    MaskitoDirective
  ],
  declarations: [AdminPage,
  GuestListComponent,
  AddGuestComponent]
})
export class AdminPageModule {}
