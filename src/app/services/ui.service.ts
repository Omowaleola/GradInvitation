import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private isLoading : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
  getIsLoading()
  {
    return this.isLoading.asObservable();
  }
  setIsLoading(isLoading : boolean)
  {
    this.isLoading.next(isLoading);
  }
}
