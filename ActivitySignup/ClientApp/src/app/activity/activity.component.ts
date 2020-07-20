import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from '../services/activities.service';
import { SubscriptionsService } from '../services/subscriptions.service';
import { Activity } from '../models/activity';
import { Subscription } from '../models/subscription';
import { Observable } from 'rxjs';
import { Action } from '../models/action';
import { ActionsService } from '../services/actions.service';
//import { IconDefinition, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  private activityId: number;
  public activity: Activity;
  public subscriptions: Observable<Subscription[]>;
  public subscriptionCount: number;
  constructor(private route: ActivatedRoute, private actSvc: ActivitiesService, private subSvc:SubscriptionsService, private actionSvc:ActionsService) {
    this.activityId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.actSvc.currentActivity.subscribe(a => this.activity = a);
    this.subscriptions = this.subSvc.subscriptions;
    this.subscriptions.subscribe(s => this.subscriptionCount = s.length);
    this.actSvc.loadActivity(this.activityId);
    this.subSvc.loadSubscriptions(this.activityId);
    this.setActions();
  }

  ngOnInit(): void {
  }
  private setActions(): void {
    let actions: Action[] = [];
    this.actionSvc.setActions(actions);
    this.actionSvc.setBackAction(true);
  }
}
