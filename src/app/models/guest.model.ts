import {GuestTypeEnum} from "./guest-type.enum";

export interface GuestModel
{
  id ?: string | null;
  name : string;
  phoneNumber : string;
  isAttendingReception : boolean;
  isAttendingCeremony : boolean;
  guestType : GuestTypeEnum;



}

