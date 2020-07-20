import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Activity } from '../models/activity';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { FormControl } from '@angular/forms';
import { switchMap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private _url: string = `api/activities`;

  private _activities: BehaviorSubject<Activity[]> = new BehaviorSubject<Activity[]>(new Array<Activity>());
  public activities: Observable<Activity[]> = this._activities.asObservable();

  private _activityAdded: BehaviorSubject<Activity> = new BehaviorSubject<Activity>(undefined);
  public activityAdded: Observable<Activity> = this._activityAdded.asObservable();

  constructor(private _http: HttpClient) { }

  public refreshActivities(): void {
    this._http.get<Activity[]>(this._url).toPromise()
      .then(acts => { this._activities.next(acts); })
      .catch(err => console.error('Failed to fetch activities', err));
  }
  public saveActivity(act: Activity): void {
    this._http.post<Activity>(this._url, act).toPromise()
      .then(act => {
        let acts = [...this._activities.value, act];
        this._activities.next(acts);
      })
      .catch(err => console.error('Failed to save activity', err));
  }
  public activityExists(title: string): Observable<boolean> {
    return this._http.get<boolean>(`${this._url}/exists/${title}`)
  }
}
export const activityAlreadyExistsAsyncValidator =
  (actService: ActivitiesService, time: number = 500) => {
    return (input: FormControl) => {
      return timer(time).pipe(
        switchMap(() => actService.activityExists(input.value)),
        map(res => {
          return res ?{ activityExists: true }:null
        })
      );
    };
  };
