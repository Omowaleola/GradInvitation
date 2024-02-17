import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GuestService} from "../../services/guest.service";
import {GuestModel} from "../../models/guest.model";
import {GuestTypeEnum} from "../../models/guest-type.enum";
import {Constants} from "../../models/constants";
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss'],
})
export class RsvpComponent  implements OnInit {

  guestModel ?: GuestModel;
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
    saveRsvp()
    {
      this.uiService.setIsLoading(true);
      const saveModel = Constants.getSavingModel(this.guestModel);
      this.gService.update(this.guestModel.id,saveModel).then(()=>{
        this.uiService.setIsLoading(false);
        this.router.navigate(['../invite'],{relativeTo: this.route});
      })

    }
}
