import {Component} from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {GuestService} from "../services/guest.service";
import {MaskitoElementPredicate, MaskitoOptions} from "@maskito/core";
import {NgForm} from "@angular/forms";
import {GuestModel} from "../models/guest.model";
import {GuestTypeEnum} from "../models/guest-type.enum";
import {Constants} from "../models/constants";
import {UiService} from "../services/ui.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  readonly maskPredicate: MaskitoElementPredicate = async (el) => (el as HTMLIonInputElement).getInputElement();
  readonly phoneMask: MaskitoOptions = {
    mask: [
      ...Array(3).fill(/\d/),
      ' ',
      ...Array(3).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/)
    ],
  };
  baseModel: GuestModel = Constants.baseGuestModel;
  guestDetail: GuestModel = {...this.baseModel};
  selectedNumber : string ='';
  alertIsOpen =false;
  public alertButtons = ['Ok' ];

  constructor(private router: Router,
              private gService: GuestService,
              private uiService: UiService) {}

  openInviteForm(inviteForm: NgForm) {
    this.uiService.setIsLoading(true);
    this.gService.select(this.selectedNumber)
      .subscribe(
      {
        next: (responses: any) => {
          if (responses != null) {
            this.guestDetail = responses;
            // inviteForm.form.reset();
            if(this.guestDetail.guestType != GuestTypeEnum.admin){
              this.router.navigate(['/details/invite']);
            }else{
              this.router.navigate(['/admin']);
            }
            this.uiService.setIsLoading(false);
          } else {
            this.uiService.setIsLoading(false);
            this.alertIsOpen = true;
            inviteForm.form.reset();
          }
        },
        error: (err : any) => {
          console.error(err);
          this.uiService.setIsLoading(false);
          this.alertIsOpen = true;
          inviteForm.form.reset();
        }
      });

  }


  setOpen(value: boolean)
  {
    this.alertIsOpen = value;
  }
}
