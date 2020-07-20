import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../services/activities.service';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { ActionsService } from '../services/actions.service';
import { Action } from '../models/action';
import { faPlus, faInfo, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddActivityComponent } from '../add-activity/add-activity.component';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  activities: Observable<Activity[]>;
  infoIcon: IconDefinition = faInfo;
  constructor(private actSvc: ActivitiesService, private actionSvc: ActionsService, public dialog: MatDialog) {
    this.activities = this.actSvc.activities;
    this.actSvc.refreshActivities();
    this.setActions();
  }

  ngOnInit(): void {

  }
  private setActions(): void {
    let actions: Action[] = [{
      title: "Add Activity",
      icon: faPlus,
      func: this.showAddActivityDialog
    }];
    this.actionSvc.setActions(actions);
  }
  showAddActivityDialog=()=> {
    
    const dialogRef = this.dialog.open(AddActivityComponent, {
      width: '250px',
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
