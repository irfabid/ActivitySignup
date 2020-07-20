import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { Activity } from './models/activity';

interface ActivitiesStateModel {
  activities: Activity[],
  currentActivity: Activity
}
@State<ActivitiesStateModel>({
  name: 'activities',
  defaults: {
    currentActivity: undefined,
    activities:new Array<Activity>()
  },
})
@Injectable()
export class ActivitiesState {
  constructor() {

  }
}
