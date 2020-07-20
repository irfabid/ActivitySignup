import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AddSubscriptionComponent } from '../add-subscription/add-subscription.component';
import { Activity } from '../models/activity';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { FormControl } from '@angular/forms';
import { switchMap, map } from 'rxjs/operators';
import { Subscription } from '../models/subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {
  _url: string = 'api/activitySubscriptions';
  private _subscriptions: BehaviorSubject<Subscription[]> = new BehaviorSubject<Subscription[]>(new Array<Subscription>());
  public subscriptions: Observable<Subscription[]> = this._subscriptions.asObservable();
  constructor(private _http: HttpClient, public dialog: MatDialog) { }

  public showAddSubscriptionDialog(act: Activity): void {
    const dialogRef = this.dialog.open(AddSubscriptionComponent, {
      width: '250px',
      data: act
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  public addSubscription(sub: Subscription): void {
    this._http.post<Subscription>(`${this._url}`, sub)
      .toPromise()
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }
  public subscriptionExists(email: string, act: Activity): Observable<boolean> {
    return this._http.get<boolean>(`${this._url}/${act.id}/exists/${email}`);
  }
  public loadSubscriptions(actId: number): void {
    this._http.get<Subscription[]>(`${this._url}/${actId}`)
      .toPromise()
      .then(res => this._subscriptions.next(res))
      .catch(err => console.error(err));
  }
}
export const alreadySubscribedAsyncValidator =
  (subService: SubscriptionsService, act:Activity, time: number = 500) => {
    return (input: FormControl) => {
      return timer(time).pipe(
        switchMap(() => subService.subscriptionExists(input.value, act)),
        map(res => {
          return res ? { alreadySubscribed: true } : null
        })
      );
    };
  };
