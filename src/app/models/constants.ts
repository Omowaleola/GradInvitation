import {GuestModel} from "./guest.model";
import {GuestTypeEnum} from "./guest-type.enum";

export class Constants {
  static baseGuestModel: GuestModel = {
    id: '',
    name: '',
    isAttendingCeremony: false,
    isAttendingReception: false,
    phoneNumber: '',
    guestType: +GuestTypeEnum.reception
  };
  static getSavingModel(guestDetail: GuestModel) {
    const saveModel: GuestModel = {
      name: guestDetail.name,
      guestType: guestDetail.guestType,
      isAttendingCeremony: guestDetail.isAttendingCeremony,
      isAttendingReception: guestDetail.isAttendingReception,
      phoneNumber: guestDetail.phoneNumber
    };
    return saveModel;
  }

  static marbleAddress = 'Trumpet on Keyes, Corner Keyes and Jellicoe Avenue, Rosebank';
  static ujAddress = 'Corner Kingsway and University Road, Auckland Park, Johannesburg, 2092';
  static ujGraduationParkingUrl = 'https://goo.gl/maps/haw7AKsFLS6uvLEK8';
}
