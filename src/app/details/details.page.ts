import {Component, Input, OnInit} from '@angular/core';
import {GuestModel} from "../models/guest.model";
import {Router} from "@angular/router";
import {GuestService} from "../services/guest.service";
import {UiService} from "../services/ui.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  guestModel ?: GuestModel;

  constructor(private router : Router,
              private gService: GuestService,
              private uiService: UiService) { }

  ngOnInit()
  {
    this.uiService.setIsLoading(true);
    this.gService.getGuest().subscribe({
      next: (guest)=>{
        this.guestModel = guest;
        this.uiService.setIsLoading(false);
        if(this.guestModel == null)
        {
          this.router.navigate(['']);
        }
      }
    })

  }

}
