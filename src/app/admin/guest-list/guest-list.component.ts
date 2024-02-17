import {Component, OnInit} from '@angular/core';
import {GuestModel} from "../../models/guest.model";
import {GuestService} from "../../services/guest.service";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss'],
})
export class GuestListComponent implements OnInit {

  guests: GuestModel[] = [];

  constructor(private gService: GuestService,
              private route: ActivatedRoute,
              private uiService: UiService,
              private router: Router) {
  }

  ngOnInit() {
    this.getGuests();
  }

  private getGuests()
  {
    this.uiService.setIsLoading(true);
    this.gService.getAll().subscribe({
      next: (guests) => {
        this.guests = guests;
        this.uiService.setIsLoading(false);
      }
    })
  }

  editGuest(guest: GuestModel) {
    const navigationExtras: NavigationExtras = {
      state: {guest: guest},
      relativeTo: this.route
    };
    this.router.navigate(['../add'], navigationExtras);
  }

  deleteGuest(guest: GuestModel) {
    this.gService.delete(guest.id).then(()=>
    {
      this.getGuests();
    })
  }
}
