import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GuestService} from "../../services/guest.service";
import {GuestTypeEnum} from "../../models/guest-type.enum";
import {GuestModel} from "../../models/guest.model";
import {UiService} from "../../services/ui.service";
import {Constants} from "../../models/constants";

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
})
export class InviteComponent  implements OnInit {

  guestModel : GuestModel;
  protected readonly GuestTypeEnum = GuestTypeEnum;
  constructor(private route: ActivatedRoute,
              private router: Router,
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

  protected readonly Constants = Constants;
}
