import { Component, OnInit } from '@angular/core';
import {GuestService} from "../services/guest.service";
import {GuestModel} from "../models/guest.model";
import {logoAlipay} from "ionicons/icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  logout() {
    this.router.navigate(['']);
  }
}
