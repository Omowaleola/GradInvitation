import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {GuestModel} from "../models/guest.model";
import {BehaviorSubject, map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private dbPath = '/guests';

  guestsRef: AngularFireList<GuestModel>;
  private loggedInGuest : BehaviorSubject<GuestModel> = new BehaviorSubject<GuestModel>(null);

  constructor(private db: AngularFireDatabase)
  {
    this.guestsRef =  db.list(this.dbPath);
  }

  getAll() {
    return this.guestsRef.snapshotChanges()
      .pipe(map(changes =>
        changes.map(c =>
          {
            const guest: GuestModel = {id: c.payload.key, ...c.payload.val()};
            return guest;
          }
        )));
  }

  create(guest: GuestModel): any {
    return this.guestsRef.push(guest);
  }

  select(value: string)
  {
    return this.db.list(this.dbPath, ref=> ref.orderByChild('phoneNumber').equalTo(value))
      .snapshotChanges()
      .pipe(map(
        (c : any)=>{
          const guest: GuestModel = {id: c[0].payload.key, ...c[0].payload.val()};
          return guest;
        }
      ))
      .pipe(tap((guest)=>{
        this.loggedInGuest.next(guest);
        return this.getGuest();

      }));
  }

  getGuest()
  {
    return this.loggedInGuest.asObservable();
  }

  update(key: string, value: any): Promise<void> {
    return this.guestsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.guestsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.guestsRef.remove();
  }
}
