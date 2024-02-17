import { Component, OnInit } from '@angular/core';
import {GuestModel} from "../../models/guest.model";
import {Constants} from "../../models/constants";
import {GuestTypeEnum} from "../../models/guest-type.enum";
import {GuestService} from "../../services/guest.service";
import {MaskitoElementPredicate, MaskitoOptions} from "@maskito/core";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.scss'],
})
export class AddGuestComponent  implements OnInit {

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
  guestDetail: GuestModel= Constants.baseGuestModel;
  guestTypes = [
    {
      id: GuestTypeEnum.reception,
      text: 'Reception Only'
    },
    {
      id: GuestTypeEnum.fullGraduation,
      text: 'Full Day'
    }
  ];
  buttonText = 'Add Guest';
  inputGuestModel ?: GuestModel;
  isEdit = false;
  constructor(private gService : GuestService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.inputGuestModel =  history.state['guest'];
    if (this.inputGuestModel != null)
    {
      this.buttonText = 'Edit Guest';
      this.isEdit = true;
      this.guestDetail = this.inputGuestModel;

    }
  }

  addEditGuest(ngForm: NgForm)
  {
    const saveModel = Constants.getSavingModel(this.guestDetail);
    this.getSaveMethod(saveModel).then(()=>{
      ngForm.form.reset();
      this.router.navigate(['../list'],{relativeTo: this.route});
    })

  }



  getSaveMethod(saveModel: GuestModel)
  {
    if (this.isEdit)
    {
      return this.gService.update(this.guestDetail.id,saveModel);
    }
    return this.gService.create(saveModel);
  }
}
