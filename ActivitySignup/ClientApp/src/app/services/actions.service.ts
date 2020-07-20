import { Injectable } from '@angular/core';
import { Action } from '../models/action';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  private _actions: BehaviorSubject<Action[]> = new BehaviorSubject<Action[]>(new Array<Action>());
  public actions: Observable<Action[]> = this._actions.asObservable();
  public showBack: boolean = false;
  constructor() { }
  public setActions(actions: Action[]) {
    this._actions.next(actions);
  }
  public setBackAction(show: boolean): void {
    this.showBack = show;
  }
}
